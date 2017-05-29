# HTTP协议

新增自V0.0.3

HTTP协议是一个应用层协议, 模拟Nginx/Apache的作用, 使用HTTP协议的MeepoPS是一个WebServer。

解析HTTP的header和body, 提取所需数据, 填充到$_GET, $_POST, $_FILE, $_SERVER, $_SESSION, $_COOKIE, $_REQUEST等常用的超全局变量。

使用HTTP应用层协议, 需要实例化HTTP的接口类文件Api\Http.php。[使用方法传送门](../3-api/102-http.md)