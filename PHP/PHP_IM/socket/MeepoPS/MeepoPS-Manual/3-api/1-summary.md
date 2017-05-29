# 接口

### 接口是什么
- 接口就是提供给您来继承的类. 我们的主要开发和使用都是围绕着这个类实例化后的对象来使用的. 
- 接口和协议有关, 例如Api/Telnet.php就是使用Telnet协议的接口, Api/WebServer.php就是使用HTTP协议的接口.
- 所有的接口类文件都存放在MeepoPS/Api/目录下.
- 所有的接口类文件都是MeepoPS/Core/MeepoPS.php的子类.
- 所有的接口文件都可以使用MeepoPS/Core/MeepoPS.php所提供的非private属性.
- 所有的接口文件的对象都应该(当然, 也可以不)去注册一个回调函数, 我们的所有业务逻辑代码都写在回调函数中.
- 本章后面的小结所阐述的均为通用属性和通用方法, 即所有接口都有的。每个接口的特殊属性和特殊方法写在本章最后介绍每个接口类文件的相关章节中。如[HTTP接口可使用的特殊属性和特殊方法](102-http.md)

### 如何使用
- 例如, Telnet.php 接口类文件是收发数据时使用了Telnet协议来解析(提取)数据.
- Telnet.php 由MeepoPS自动引入, 无需手动引入.
- 使用时只需要new \MeepoPS\Api\Telnet('0.0.0.0', '19910')即可. 传入的两个参数分别为需要监听的HOST和端口.
- 具体怎么写代码, 请看下面的示例.

### 使用示例:
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet19910 = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');
$telnet19911 = new \MeepoPS\Api\Telnet('0.0.0.0', '19911');
$telnet19912 = new \MeepoPS\Api\Telnet('0.0.0.0', '19912');

//启动的子进程数量. 通常为CPU核心数
$telnet19910->childProcessCount = 1;
$telnet19911->childProcessCount = 4;
$telnet19912->childProcessCount = 8;

//设置MeepoPS实例名称
$telnet19910->instanceName = 'MeepoPS-Telnet-19910';
$telnet19911->instanceName = 'MeepoPS-Telnet-19911';
$telnet19912->instanceName = 'MeepoPS-Telnet-19912';

//设置回调函数 - 这是所有应用的业务代码入口 - 您的所有业务代码都编写在这里
//$telnet19910实例的每个进程在启动完毕时都会触发callbackStartInstance所设置的回调函数
$telnet19910->callbackStartInstance = function($instance){
    var_dump('实例'.$instance->instanceName.'已经启动');
};
//有新链接加入$telnet19910实例的时候会触发callbackConnect所设置的回调函数
$telnet19910->callbackConnect = function($connect){
    var_dump('收到新链接. 链接ID为'.$connect->id."\n");
};
//$telnet19910实例收到新消息的时候会触发callbackNewData所设置的回调函数
$telnet19910->callbackNewData = function($connect, $data){
    var_dump('收到新消息. 链接ID为'.$connect->id.'的用户说'.$data."\n");
};

//启动MeepoPS, 我们实例化后的三个进程都会启动
\MeepoPS\runMeepoPS();

//后面的所有代码都不会执行哦
```
启动MeepoPS
```bash
php demo.php start
```
启动后查看一下进程吧.
```bash
ps aux | grep php
```