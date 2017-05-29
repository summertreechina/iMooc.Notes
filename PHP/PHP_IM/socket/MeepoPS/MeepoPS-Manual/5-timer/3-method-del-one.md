# 定时器的静态方法: delOne($timerId)

- 名称: delOne().
- 参数1: $timerId, 类型: int. 必填. 需要删除的定时器任务的ID.
- 描述: 删除一个指定的定时器任务.
- 返回: void

### 示例:
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//有新的链接加入$telnet实例时触发callbackConnect所设置的回调函数
$timerIdList = array();
$telnet->callbackConnect = function ($connect){
    global $timerIdList;
    $timerIdList[$connect->id] = \MeepoPS\Core\Timer::add(function($conn){
        $conn->send("PING\n");
    }, array($connect), 10, true);
};
//$telnet实例中有链接断开时触发callbackConnectClose所设置的回调函数
$telnet->callbackConnectClose = function ($connect){
    global $timerId;
    \MeepoPS\Core\Timer::delOne($timerIdList[$connect->id]);
    unset($timerIdList[$connect->id]);
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```
这个示例并不好. 为什么呢? 因为在链接断开时, MeepoPS会自动清除该连接的所有定时器, 无需手动清除.