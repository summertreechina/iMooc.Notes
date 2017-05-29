# 链接的方法: destroy()

- 名称: destroy().
- 返回: void. 
- 描述: 强制关闭链接. 即使当前该链接还有数据尚未发送完成, 仍然会强制断开链接.
- 提示: 调用此方法后, MeepoPS仍会调用接口通用回调函数callbackConnectClose

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
$telnet->callbackNewData = function ($connect, $data){
    if($data === 'exit'){
        $connect->destroy();
    }
} 

//启动MeepoPS
\MeepoPS\runMeepoPS();
```