# 链接的属性: instance

- 名称: instance.
- 类型: object.
- 描述: 该链接所属的实例对象. 例如一个TCP链接, 它属于Telnet接口类的对象.
- 提示: instance属性表示的就是一个Api接口类的对象.
- 警告: 此属性只能使用, 不能修改!

### 示例:
场景: 例如有新链接加入时, 回触发callbackConnect回调函数. 回调函数会接收到一个参数$connect. 直接$connect->instance使用即可.

这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
//$telnet就是加入的链接的属性instance
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//有新的链接加入$telnet实例时触发callbackConnect所设置的回调函数
$telnet->callbackConnect = function($connect){
    //实例名称
    $instanceName = $connect->instance->instanceName;
    foreach($connect->instance->clientList as $client){
        //这里的$connect->id的id这个属性我们马上就要讲到了
        $client->send('新用户'.$connect->id.'刚刚加入'.$instanceName);
    }
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```