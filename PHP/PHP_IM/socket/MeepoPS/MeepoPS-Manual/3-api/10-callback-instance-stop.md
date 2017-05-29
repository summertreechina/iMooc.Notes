# 接口对象的回调函数: callbackInstanceStop

- 名称: callbackInstanceStop.
- 类型: function | string | array.
- 参数1: $instance, 类型: object. 是即将停止的这个实例(接口类的对象).
- 描述: 实例停止时触发该回调函数.
      
### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例停止时触发callbackInstanceStop所设置的回调函数
$telnet->callbackInstanceStop = function($instance){
    foreach($instance->clientList as $client){
        $client->send("服务即将停止\n");
    }
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```