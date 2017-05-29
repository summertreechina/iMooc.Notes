# 如何使用

- MeepoPS/config.ini是MeepoPS的配置文件. 采用和php.ini同样的格式, ";"为注释.
- 必须引入MeepoPS/index.php文件. 使用MeepoPS都是从 require_once 'MeepoPS/index.php' 开始的.
- /MeepoPS/Api/目录下的文件为暴露给用户的接口. 需要实例化接口类文件, MeepoPS的使用都是围绕实例化接口文件后的对象来操作的. 实例化的时候传入监听的HOST和端口即可.
- MeepoPS会以回调函数的方式来触发您设置的业务逻辑. 比如新链接加入时会回调您设置的"Hello world", 再比如某个链接发送了消息"PING"时, 会触发您设置回调函数来返回消息"PONG".
- MeepoPS可以启动多个实例, 每一次的new接口类文件都是一次实例化.
- MeepoPS不但可以实例化多个接口类文件, 也可以实例化同一个接口类文件多次. 比如启动了三个实例, 分别监听了19910, 19911, 19912端口.
- 实例化接口类文件并进行了相关设置后, 调用\MeepoPS\runMeepoPS()即可启动MeepoPS.
- \MeepoPS\runMeepoPS()之后的所有代码都将不会执行.

### 使用示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$telnet->childProcessCount = 1;

//设置MeepoPS实例名称
$telnet->instanceName = 'MeepoPS-Telnet';

//启动MeepoPS
\MeepoPS\runMeepoPS();

//后面的所有代码都不会执行哦
```

启动后查看一下进程吧.
```bash
ps aux | grep php
```