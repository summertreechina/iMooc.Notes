# 接口对象的回调函数: callbackConnectClose

- 名称: callbackConnectClose.
- 类型: function | string | array.
- 参数1: $connect, 类型: object. 传输层协议类的对象, 每个链接都不相同. 例如一个TCP协议类的对象.
- 描述: 链接断开时出发该回调函数.
- 警告: 不可依赖此函数。比如用户直接关闭了客户端, 此函数是无法被触发的。

### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例中有链接断开时触发callbackConnectClose所设置的回调函数
$telnet->callbackConnectClose = function($connect){
  var_dump('链接ID为'.$connect->id."的用户断开了链接\n");
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```