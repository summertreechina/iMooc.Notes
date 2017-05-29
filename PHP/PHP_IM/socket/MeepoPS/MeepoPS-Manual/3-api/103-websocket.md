# WebSocket接口

新增自V0.0.4

接口类文件为: Api/Websocket.php

Websocket接口时指使用应用层Websocket协议来解析数据流的接口类文件。

使用Websocket接口, 只需要实例化Api\Websocket.php即可。

使用Websocket接口, 就是使用了H5推出的WebSocket协议。可以在服务器和客户端浏览器之间维持一个长链接。颠覆传统的HTTP交互方式。
Websocket可以使服务器从只能被动响应的基础上, 新增了主动推送的功能。

Websocket是Web类即时通讯服务的基础所在。如在线聊天, 实时监控等。

### 使用方法
使用时调用Websocket的接口即可。
```
$telnet = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');
```

在客户端, 在浏览器中使用JavaScript原生语法即可。
```
ws = new WebSocket("ws://127.0.0.1:19910");
ws.onopen = function() {
    console.log("连接成功");
    ws.send('tom');
    console.log("给服务端发送一个字符串：tom");
};
ws.onmessage = function(e) {
    console.log("收到服务端的消息：" + e.data);
};
```

### 特殊属性
除[接口](../3-api)中所阐述的通用属性外, Websocket接口所独有的:

#### 收到PING类型消息时回调函数: callbackWSPing
- 名称: callbackWSPing.
- 类型: string.
- 描述: callbackWSPing用来设置服务器收到PING类型的消息时的回调函数.
- 提示: Webscoket协议的PING类型消息并不是说收到的文本消息是字符串"PING", 而是根据WebSocket协议, 某次请求中opcode字段的值为0x9时, 这条消息就是PING类型的消息。

###### 示例: 
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用Webscoket协议的Websocket接口类
$webSocket = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');

//设置Webscoket接口特有的回掉函数
$webSocket->callbackWSPing = function($connect){
    echo "收到PING类型的消息\n";
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```

#### 收到PONG类型消息时回调函数: callbackWSPong
- 名称: callbackWSPong.
- 类型: string.
- 描述: callbackWSPong用来设置服务器收到PONG类型的消息时的回调函数.
- 提示: Webscoket协议的PONG类型消息并不是说收到的文本消息是字符串"PONG", 而是根据WebSocket协议, 某次请求中opcode字段的值为0xa时, 这条消息就是PONG类型的消息。

###### 示例: 
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用Webscoket协议的Websocket接口类
$webSocket = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');

//设置Webscoket接口特有的回掉函数
$webSocket->callbackWSPong = function($connect){
    echo "收到PONG类型的消息\n";
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```

#### 断开链接时回调函数: callbackWSDisconnect
- 名称: callbackWSDisconnect.
- 类型: string.
- 描述: callbackWSDisconnect用来设置断开链接时的回调函数. 包括服务器主动断开链接时、客户端发送断开链接类型的消息时。
- 提示: Webscoket协议的断开链接类型消息并不是说单纯的断开链接, 而是根据WebSocket协议, 某次请求中opcode字段的值为0x8时, 这条消息就是断开链接类型的消息。在浏览器(IE我没测, 也不想测), 刷新页面, 正常关闭页面时, 浏览器都会自动发送断开链接的消息。
- 警告: 不可完全依赖此回调函数来处理业务。因为在客户端断电等特殊情况下, 浏览器尚未来的及发送断开链接类型消息时就已经被强制关闭了。因此, 检测链接是否存货, 应该依靠PING。 比如5秒一个PING, 10秒都没收到PONG, 服务端就断开此链接。

###### 示例: 
这是我们自行编写的代码: demo.php
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用Webscoket协议的Websocket接口类
$webSocket = new \MeepoPS\Api\Websocket('0.0.0.0', '19910');

//设置Webscoket接口特有的回掉函数
$webSocket->callbackWSDisconnect = function($connect){
    echo '链接即将被关闭, ID: ' . $connect->id . "\n";
};

//启动MeepoPS
\MeepoPS\runMeepoPS();
```

### 特殊方法
无, 与[接口](../3-api)中所阐述的通用方法完全一致。

了解WebSocket协议是什么, 这里是 [传送门](../7-protocol/5-websocket.md)