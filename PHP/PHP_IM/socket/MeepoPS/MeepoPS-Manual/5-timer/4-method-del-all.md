# 定时器的静态方法: delAll()

- 名称: delAll().
- 描述: 删除所有的的定时器任务.
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
$telnet->callbackConnect = function ($connect){
    global $timerId;
    \MeepoPS\Core\Timer::add(function($conn){
        $conn->send("PING\n");
    }, array($connect), 10, true);
};
//$telnet实例停止时触发callbackInstanceStop所设置的回调函数
$telnet->$callbackInstanceStop = function ($connect){
    \MeepoPS\Core\Timer::delAll();
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```
这个示例并不好. 为什么呢? 因为在实例停止时, MeepoPS会自动清除所有定时器, 无需手动清除.