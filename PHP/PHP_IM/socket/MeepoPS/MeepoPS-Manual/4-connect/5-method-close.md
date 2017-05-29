# 链接的方法: close($data=null)

- 名称: close().
- 参数1: $data, 类型: mixed. 选填. 关闭要发送的数据.
- 返回: void. 
- 描述: 平滑关闭链接. 会在所有的数据发送完毕后关闭. 如果$data不为空, 那么会在关闭前调用send($data)发送结束告别语.
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
        $connect->close('啊朋友再见, 啊朋友再见');
    }
} 

//启动MeepoPS
\MeepoPS\runMeepoPS();
```