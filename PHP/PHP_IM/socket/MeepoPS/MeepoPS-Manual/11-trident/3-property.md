# Trident接口的属性
Trident接收传统接口的所有特性外, 还独有一些属性。

### 初始化
```php
new \MeepoPS\Api\Trident('telnet', '0.0.0.0', '19910', array(), '');
```
Trident类一共有5个参数。
- 参数一: 传统接口的名称, 如Telnet、WebSocket、Http等。
- 参数二: 参数一的接口监听的IP
- 参数三: 参数一的接口监听的端口
- 参数四: stream_context_create()函数所需要的参数。默认为空
- 参数五: 启动Trident三层模型中的哪一层。可选参数有confluence、business、transfer三个。默认为空。为空时三层全部启动。

### Confluence层相关的属性
- $confluenceIp: Confluence层所监听的IP(0.0.0.0/127.0.0.1/内网IP/外网IP取其一)
- $confluencePort: Confluence层所监听的端口
- $confluenceInnerIp: Confluence层所部署在服务器后监听的IP(建议填写内网IP)
- $confluenceName: 给Confluence层的进程起一个好听的名字

### Transfer层相关属性
- Transfer层实际上就是给传统的接口披了一层外衣。
- 除了Trident特有属性外, 其他所有属性与方法的赋值/调用等操作都是在操作传统的接口。
- $transferInnerIp: Transfer监听的内网IP, Business会链接到这里。
- $transferInnerPort: Transfer监听的内网端口, Business会链接到这里。
- $transferEncodeFunction: 函数名, 可为空。Transfer在发送数据之前进行数据转换。此操作是在调用$connect->send()方法之前进行的。有的同学可能会问, 在传统接口中, $connect->send($data)时不是会自动根据接口所依赖的协议转码吗, 在这里为什么还有这个属性。是这样的, 比如我们使用WebSocket接口做了聊天应用, 数据传输又使用的json格式, 那在每个发消息的地方, 都需要写json_encode()。
    
### Business层相关属性
- $businessChildProcessCount: Business启动多少个子进程。
- $businessName: 给Business层的进程起一个好听的名字。

### 其他
- $innerProtocol: Trident内部的通信协议。默认为telnetjson。telnetjson可以使用于绝大多数的场景, 因为json是我们通常的应用所采用的数据格式。如果是二进制的数据传输, telnetjson就不适用了, 因为它们在json_encode之后是空。

### 示例
```php
//----------引入MeepoPS----------
require_once 'MeepoPS/index.php';

//使用基于三层网络模型的文本传输的Api类。
$trident = new \MeepoPS\Api\Trident('telnet', '0.0.0.0', '19910');

//配置Confluence层
$trident->confluenceIp = '0.0.0.0';
$trident->confluencePort = '19911';
$trident->confluenceInnerIp = '127.0.0.1';

//配置Transfer层
$trident->transferInnerIp = '0.0.0.0';
$trident->transferInnerPort = '19912';
$trident->transferChildProcessCount = 3;

//配置Business层
$trident->businessChildProcessCount = 3;

//设置收到新消息后的回调函数。业务逻辑, 自行编写即可
$trident->callbackNewData = function($connect, $data){
     var_dump('收到消息'.$data);
};

//启动三层模型
$trident->run();

//启动MeepoPS
\MeepoPS\runMeepoPS();
```