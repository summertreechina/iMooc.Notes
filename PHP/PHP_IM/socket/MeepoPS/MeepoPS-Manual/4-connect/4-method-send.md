# 链接的方法: send($data, $isEncode = true)

- 名称: send().
- 参数1: $data, 类型: mixed. 必填. 要发送的数据.
- 参数2: $isEncode, 类型: bool. 选填. 是否在发送前按照应用层协议转码. 默认为true.
- 返回: int. 拒绝发送为0, 发送成功为发送成功的数据长度. 加入待发送缓冲区延迟发送为-1. 发送失败为false.
- 描述: 给该对象所属的链接发送消息.
- 提示: 理论上$data可以是任何格式, 比如int, string, array. 但是, 在进入Tcp协议发送时, 必须为字符串! 否则发送失败. 比如$data是数组, 并且$isEncode=false. 那么这肯定是发送失败的.

### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//有新的链接加入$telnet实例时触发callbackConnect所设置的回调函数
$telnet->callbackConnect = function($connect){
    foreach($connect->instance->clientList as $client){
        //上线提示就不用告诉自己了, 对吧!
        if($connect->id != $client->id){
            $client->send('新用户'.$connect->id.'已经上线了.');   
        }
    }
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```