# 接口对象的回调函数: callbackSendBufferFull

- 名称: callbackSendBufferFull.
- 类型: function | string | array.
- 参数1: $connect, 类型: object. 传输层协议类的对象, 每个链接都不相同. 例如一个TCP协议类的对象.
- 描述: 待发送缓冲区已经塞满时触发该回调函数. 例如一个TCP链接, 它的待发送缓冲区已经塞满时触发该回调函数. 直白的说, 就是待发送的队列积压严重, 你快去看看要不要加机器.
    
### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例中某个链接遇到待发送缓冲区已满时触发callbackSendBufferFull所设置的回调函数
$telnet->callbackSendBufferFull = function($connect){
    error_log('Waiting to send the buffer is full, we should increase the processing efficiency of the. For example, add a server');
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```