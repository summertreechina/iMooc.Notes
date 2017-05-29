# 应用层协议

应用层协议是指, 数据通过TCP等传输层协议接收后, 需要用应用层协议进行数据解析. 或者数据通过TCP等传输层协议发送前, 需要用应用层协议进行数据打包.

应用层协议可以是Telnet, HTTP, WebSocket等主流的协议, 也可以自行定义和开发.

对普通开发者来讲, 不需要关心应用层协议的实现方式, 就像我们用LAMP/LNMP搭建网站的时候也不会关心HTTP协议的内容, 对于PHP来说$_GET和$_POST就足够了.

MeepoPS/Api/目录下的所有接口类, 都是在继承了MeepoPS的核心父类之后, 对不同应用层协议的实现. 比如MeepoPS/Api/Telnet.php就是继承了MeepoPS核心父类之后, 对外提供的Telnet协议的服务.

所有的应用层协议的实现都是一个PHP的类, 放在MeepoPS/Core/ApplicationProtocol/目录下. 如Telnet协议就是在MeepoPS/Core/ApplicationProtocol/Telnet.php文件中实现的. 如果我们想要自行开发一个应用层协议, 仿照MeepoPS/Core/ApplicationProtocol/Telnet.php来实现, 并且仍然放置在MeepoPS/Core/ApplicationProtocol/目录下.