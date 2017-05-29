# 接口对象的回调函数: callbackStartInstance

- 名称: callbackStartInstance.
- 类型: function | string | array.
- 参数1: $instance, 类型: object. 是刚刚启动的这个实例(接口类的对象).
- 描述: MeepoPS在启动这个实例的子进程时, 触发该回调函数. 有几个子进程, 就会触发几次.
- 提示: Mysql等单例通常写在这里, 一个子进程一个Mysql链接.

### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例的每个进程在启动完毕时都会触发callbackStartInstance所设置的回调函数
$telnet->callbackStartInstance = function($instance){
    var_dump('实例'.$instance->instanceName.'已经启动');
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```