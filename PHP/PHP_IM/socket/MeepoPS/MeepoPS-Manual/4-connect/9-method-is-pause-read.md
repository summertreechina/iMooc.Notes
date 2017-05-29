# 链接的方法: isPauseRead()

- 名称: isPauseRead().
- 返回: bool. true是已暂停. false是未暂停 
- 描述: 服务器是否已经暂停获取该链接的消息.

### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例收到新消息时触发callbackNewData所设置的回调函数
$telnet->callbackNewData = function ($connect, $data){
    //敢说PHP不是最好的语言, 直接禁言. 服务器不再收取此链接的消息.
    if($data === 'PHP is No.2'){
        $connect->pauseRead();
        //信号定时器
        \MeepoPS\Core\Timer::add(function($connect){
            $connect->resumeRead();
            $connect->send("恢复发言, 以后注意措辞!");
        }, array($connect), 10, false);
        return;
    }
    foreach($connect->instance->clientList as $client){
        if($client->isPauseRead() === false){
            $data = 'hello world';
            $client->send($data);
        }
    }
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```