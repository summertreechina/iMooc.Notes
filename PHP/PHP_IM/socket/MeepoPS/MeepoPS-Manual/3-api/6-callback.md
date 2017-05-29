# 接口对象的回调函数

每一个接口对象, 都可以设置回调函数. 回调函数穿插在MeepoPS的整个生命周期, 比如MeepoPS的启动时, 收到新链接时, 收到新的消息时, 出错时等都会触发回调函数.

MeepoPS的所有业务逻辑代码, 都是写在回调函数当中. 如果设置了某个回调函数, 在触发时会尝试调用, 如果没有设置则不会调用.

所有的回调函数的设置, 都是针对接口类的对象的public属性. 如果同一个属性(包括但不限于回调函数)赋值多次, 那么后面的覆盖前面的.

比如设置一个回调函数callbackNewData, 那么收到新消息时, 会触发该函数, 从而执行我们的业务逻辑代码. 例如收到消息是一个时间段, 业务可能是查询Mysql, 将该时间段内的活跃的服务器IP列表返回给用户.

所有用来设置回调函数的属性, 都可能是三种类型. string, array, function.

我们以收到新消息的回调函数的属性callbackNewData为例, 来演示三种不同的类型.

##### String
给$api->callbackNewData赋值一个字符串, 而这个字符串是一个函数名.
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例的每个进程在启动完毕时都会触发callbackStartInstance所设置的回调函数
$telnet->callbackNewData = 'receivedMessage'
function receivedMessage($connect, $data){
    var_dump('用户ID'.$connect->id.'说:'.$data."\n");
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```

##### Array
当需要回调的函数是一个类对象的一个方法, 就需要给$api->callbackNewData赋值一个数组.
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例的每个进程在启动完毕时都会触发callbackStartInstance所设置的回调函数
$telnet->callbackNewData = array('Message', 'read');

//启动MeepoPS
\MeepoPS\runMeepoPS();

class Message{
    public function read($connect, $data){
        var_dump('用户ID'.$connect->id.'说:'.$data."\n");
    }
}
```

##### Function
使用匿名函数, $api->callbackNewData就是function类型. 这种写法最简洁优雅.
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例的每个进程在启动完毕时都会触发callbackStartInstance所设置的回调函数
$telnet->callbackNewData = function ($connect, $data){
    var_dump('用户ID'.$connect->id.'说:'.$data."\n");
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```