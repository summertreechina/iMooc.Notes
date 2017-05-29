# 链接的方法: pauseRead()

- 名称: pauseRead().
- 返回: void. 
- 描述: 服务器暂停获取此链接的所有数据.

### 示例:
场景: 用户发了脏话, 那我们就屏蔽他发言.

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
    //敢说PHP不是最好的语言, 直接禁言. 服务器不再收取此链接的消息.
    if($data === 'PHP is No.2'){
        $connect->pauseRead();
        return;
    }
}

//启动MeepoPS
\MeepoPS\runMeepoPS();
```