# 链接的属性: id

- 名称: id.
- 类型: int.
- 描述: 每个实例的每个进程, 都有一个唯一的id. 从1开始, 每次增加1.
- 提示: instance属性表示的就是一个Api接口类的对象.
- 警告: 此属性只能使用, 不能修改!

### 示例:
场景: 例如有新链接加入时, 回触发callbackConnect回调函数. 回调函数会接收到一个参数$connect. 直接$connect->id使用即可.

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