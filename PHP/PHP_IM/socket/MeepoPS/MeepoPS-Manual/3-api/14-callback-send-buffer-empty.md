# 接口对象的回调函数: callbackSendBufferEmpty

- 名称: callbackSendBufferEmpty.
- 类型: function | string | array.
- 参数1: $connect, 类型: object. 传输层协议类的对象, 每个链接都不相同. 例如一个TCP协议类的对象.
- 描述: 缓冲区没有积压时触发该回调函数. 例如一个TCP链接, 缓冲区没有积压时触发该回调函数.
- 提示: 本回调函数不会每次缓冲区为空时都会触发. 仅仅会在一次没有发送完, 需要多次发送的时候, 当所有数据都发送完时才会触发.    

### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例中某个链接遇到待发送缓冲区已空时触发callbackSendBufferEmpty所设置的回调函数
$telnet->callbackSendBufferEmpty = function($connect){
    var_dump('用户'.$connect->id."的待发送队列已经为空\n");
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```