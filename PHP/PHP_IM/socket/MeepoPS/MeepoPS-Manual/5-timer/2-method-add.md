# 定时器的静态方法: add($callback, array $args, $intervalSecond, $isAlways = true)

- 名称: add().
- 参数1: $callback, 类型: string|array|function. 必填. 回调函数.
- 参数2: $args, 类型: bool. 必填. 回调函数的参数.
- 参数3: $intervalSecond, 类型: bool. 必填. 多少秒后运行.
- 参数4: $isAlways, 类型: bool. 选填. 是否是永久性定时器任务, 默认为true.
- 描述: 添加一个定时器任务. 到时间时, 会触发您传入的参数1($callback)的回调函数.
- 返回: int|false. 设置成功返回定时器任务ID, 设置失败返回false.

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
    \MeepoPS\Core\Timer::add(function($conn){
        $conn->send("PING\n");
    }, array($connect), 10, true);
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```