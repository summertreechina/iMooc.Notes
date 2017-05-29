# 接口对象的通用属性: clientList

- 名称: clientList.
- 类型: array.
- 描述: clientList用来获取当前实例下的当前进程中的所有的客户端链接对象的列表. 数组中每个元素都是一个对象, 是传输层协议类的对象. 例如一个TCP协议类的对象.
- 提示: 在实例化这个接口的时候clientList属性肯定是空, 因为MeepoPS还没有启动. 在\MeepoPS\runMeepoPS();之后也不能调用clientList属性, 因为\MeepoPS\runMeepoPS();之后的代码是不执行的. 因此这个属性在回调函数中使用, 关于回调函数, 后面会讲到.
- 备注: 循环clientList, 调用其中的每一个元素的send()方法, 这, 就是广播!
- 警告: 此属性只能使用, 不能修改!

### 示例: 
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
$telnet->callbackNewData = 'callbackNewData';

//启动MeepoPS
\MeepoPS\runMeepoPS();

//收到新消息的时候触发此回调函数
function callbackNewData($connect, $data){
    var_dump('用户ID'.$connect->id.'说:'.$data."\n");
    //给所有用户发送消息(群聊)
    foreach($connect->instance->clientList as $client){
        if($connect->id != $client->id){
            $client->send('用户'.$connect->id.'说: '.$data."\n");
        }
    }
}
```
其中, callbackNewData函数还可以用另一种方式实现:
```php
<?php
//收到新消息的时候触发此回调函数
function callbackNewData($connect, $data){
    var_dump('用户ID'.$connect->id.'说:'.$data."\n");
    //给所有用户发送消息(群聊)
    global $telnet;
    foreach($telnet->clientList as $client){
        $client->send('用户'.$connect->id.'说: '.$data."\n");
    }
}
```
当然, 回调函数是可以写成匿名函数的形式. 如:
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//收到新消息的时候触发此回调函数
$telnet->callbackNewData = function ($connect, $data){
                               var_dump('用户ID'.$connect->id.'说:'.$data."\n");
                               //给所有用户发送消息(群聊)
                               foreach($connect->instance->clientList as $client){
                                   if($connect->id != $client->id){
                                       $client->send('用户'.$connect->id.'说: '.$data."\n");
                                   }
                               }
                           };

//启动MeepoPS
\MeepoPS\runMeepoPS();
```