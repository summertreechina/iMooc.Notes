# 接口对象的回调函数: callbackNewData

- 名称: callbackNewData.
- 类型: function | string | array.
- 参数1: $connect, 类型: object. 传输层协议类的对象, 每个链接都不相同. 例如一个TCP协议类的对象.
- 参数2: $data, 类型: string. 经过协议解析后的数据.
- 描述: 收到新数据时触发该回调函数.
- 提示: HTTP协议的$data参数, 是一个true. 表示解析HTTP头成功, 您开发时使用$_GET, $_POST, $_FILE, $_COOKIE, $_SESSION, $_REQUEST等直接所使用的超全局变量.
        
### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例收到新消息时触发callbackNewData所设置的回调函数
$telnetApi->callbackNewData = function($connect, $data){
    var_dump('收到新消息. 链接ID为'.$connect->id.'的用户说'.$data."\n");
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```