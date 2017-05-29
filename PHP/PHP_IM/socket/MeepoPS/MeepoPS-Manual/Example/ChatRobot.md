# 人机聊天

新增于V0.0.5

后端采用MeepoPS的WebSocket接口类。

前端采用[LayIM1.0](http://www.w3cdream.com/content-sort-21-article-521.html)为基础, 并由zhaodan-it@360.cn修改

### 展示:
![WebSocket人机聊天](Image/Chat_Robot1.png?raw=true "WebSocket人机聊天")

### 启动
使用:
```bash
cd Example/Chat_Robot
sudo php chat_rebot.php start
```
启动. 

守护进程模式启动使用:
```bash
cd Example/Chat_Robot
sudo php webserver_server.php start -d
```

启动后, MeepoPS会有两个实例, 一个实例作为WebSocket的服务端, 监听19910端口, 等待接受WebSocket链接并进行业务逻辑的处理。另一个实例是WebServer, 监听19911端口, 充当Nginx/Apache的功能。

![WebSocket人机聊天启动](Image/Chat_Robot2.png?raw=true "WebSocket人机聊天启动")

### 使用

打开浏览器, 访问http://localhost:19911/index.html即可。

浏览器打开页面后, JS会使用WebSocket协议链接到服务端, 本例是链接到127.0.0.1:19910。

链接建立完成后, 会触发JS的onopen()事件, 像服务器发送一个消息。

我们可以在界面上输入任何字符并发送。

服务端在收到前端的消息后, 会返回"收到消息:*****"的字样给前端JS。

JS会渲染到界面上。

### 友情提示: 
前端断线重链的库:  [ReconnectingWebSocket.js](https://github.com/joewalnes/reconnecting-websocket)

引入后, 只需要将JS中的WebSocket("ws://")替换位ReconnectingWebSocket("ws://")即可。