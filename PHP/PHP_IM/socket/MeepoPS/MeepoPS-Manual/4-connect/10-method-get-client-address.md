# 链接的方法: getClientAddress()

- 名称: getClientAddress().
- 返回: array | false. 获取成功是数组, 0是IP, 1是端口. 获取失败是false.
- 描述: 获取此链接的来源IP和端口.

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
    $address = $connect->getClientAddress();
    if($address !== false){
        var_dump('IP: ' . $address[0] . ', 端口: ' . $address[1]);  
    }
};
//启动MeepoPS
\MeepoPS\runMeepoPS();
```