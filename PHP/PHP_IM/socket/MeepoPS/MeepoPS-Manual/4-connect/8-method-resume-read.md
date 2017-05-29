# 链接的方法: resumeRead()

- 名称: resumeRead().
- 返回: void. 
- 描述: 回复接收此链接的消息.
- 注意: 不能根据链接传过来的数据内容判断暂停和开启. 因为根据内容, 比如收到了一个"stop", 我们调用$connect->pauseRead()把它给暂停了. 期望用户输入"start"后, 再恢复. 可是! 我们已经把用户给禁言了, 又怎么获取到用户说的"start"呢?

### 示例:
场景: 启用定时器, 10秒后恢复, 可以接续接收消息.

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
        $data = 'hello world';
        $client->send($data);
    }
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```