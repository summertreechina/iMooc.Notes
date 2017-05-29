# 接口对象的回调函数: callbackConnect

- 名称: callbackConnect.
- 类型: function | string | array.
- 参数1: $connect, 类型: object. 传输层协议类的对象, 例如一个TCP协议类的对象. 每个链接的$connect变量都不相同. $connect的用法在传输层协议一章会讲到.
- 描述: 有新的链接加入本实例时触发该回调函数.
        
### 示例:
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
    var_dump('收到新链接. 链接ID为'.$connect->id."\n");
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```