# 接口对象的回调函数: callbackError

- 名称: callbackError.
- 类型: function | string | array.
- 参数1: $connect, 类型: object. 传输层协议类的对象, 每个链接都不相同. 例如一个TCP协议类的对象.
- 参数2: $errCode, 类型: int. 错误码.
- 参数3: $errMsg, 类型: string. 错误描述.
- 描述: 在链接有错误时触发该回调函数. 例如一个TCP链接, 在缓冲区已满或发送消息失败的时候会触发.

### 示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet实例遇到错误时触发callbackError所设置的回调函数
$telnet->callbackError = function($connect, $errCode, $errMsg){
    error_log('error code is ' . $errCode . '. error message: ' . $errMsg . '. connect is ' . serialize($connect));
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```