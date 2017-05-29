# 自定义应用层协议

MeepoPS目前提供的协议, 如Telnet, HTTP, WebSocket协议等, 如果不能满足您的业务需求, 您可以自行开发协议类.

所有的应用层协议类都要实现ProtocolInterface接口. ProtocolInterface接口约定了每个实现的类都必须实现三个方法: input(), encode(), decode().

##### input($data)
- 参数: string. 数据内容
- 描述: 方法将输入的内容(消息数据)进行检测. 返回第一个单个包的长度. 如果数据不是一个完整的数据包(数据包还未结束), 则返回0, 等待下次数据进来后再一起计算.

##### encode($data)
- 参数: string. 数据内容
- 描述: 数据编码. 默认在发送数据前自动调用此方法. 不用您手动调用.

##### decode($data)
- 参数: string. 数据内容
- 描述: 数据解码. 默认在接收数据时自动调用此方法. 不用您手动调用.

我们举个栗子, 比如我们采用文本化的JSON格式作为数据传输的格式. 那我们可以开发一个JSON协议.

### Json协议示例
代码文件存放在MeepoPS/Core/ApplicationProtocol/Json.php
```php
<?php
/**
 * 从TCP数据流中解析Json协议
 * 每个数据包已\n来结尾.如果发现\n, 则\n之前为一个数据包.如果没有\n,则等待下次数据的到来
 */
namespace MeepoPS\Core\ApplicationProtocol;

class Json implements ProtocolInterface
{
    /**
     * 检测数据, 返回数据包的长度.
     * 没有数据包或者数据包未结束,则返回0
     * @param string $data
     * @return int
     */
    public static function input($data)
    {
        //获取首个数据包的大小(结尾的位置)
        $position = strpos($data, "\n");
        //如果没有, 说明接收到的不是一个完整的数据包, 则暂时不处理本次请求, 等待下次接收后再一起处理
        if ($position === false) {
            return 0;
        }
        //返回数据包的长度. 因为计数从0开始,所以返回时+1
        return $position + 1;
    }

    /**
     * 数据编码. 默认在发送数据前自动调用此方法. 不用您手动调用.
     * @param string $data 给数据流中发送的数据
     * @return string
     */
    public static function encode($data)
    {
        return json_encode($data) . "\n";
    }

    /**
     * 数据解码. 默认在接收数据时自动调用此方法. 不用您手动调用.
     * @param string $data 从数据流中接收到的数据
     * @return array
     */
    public static function decode($data)
    {
        return json_decode(trim($data), true);
    }
}
```

开发完一个应用层的协议后, 在MeepoPS/Api目录下再开发一个接口类文件.
代码文件存放在MeepoPS/Api/Json.php
```php
<?php
/**
 * API - Json协议
 */
namespace MeepoPS\Api;

use MeepoPS\Core\MeepoPS;

class Json extends MeepoPS
{

    /**
     * Telnet constructor.
     * @param string $host string 需要监听的地址
     * @param string $port string 需要监听的端口
     * @param array $contextOptionList
     */
    public function __construct($host, $port, $contextOptionList = array())
    {
        if (!$host || !$port) {
            return;
        }
        parent::__construct('json', $host, $port, $contextOptionList);
    }

    /**
     * 运行一个Telnet实例
     */
    public function run()
    {
        parent::run();
    }
}
```