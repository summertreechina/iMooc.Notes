# 一个WebServer
一个WebServer是指, 一台服务器作为服务端, 启动webserver_server.php. 此时, 启动了WebServer实例.

WebServer实例监听19910端口, 充当Web服务器(替代Apache/Nginx).

### real_time_monitor_ssh_server.php 是服务端.
使用:
```bash
sudo php webserver_server.php start
```
启动. 

守护进程模式启动使用:
```bash
sudo php webserver_server.php start -d
```

### WebServer配置
请在config.ini中配置域名和根目录, 示例如下:
```
http_domain_document_list = 'localhost:19910 & /var/www/MeepoPS/Example/Web_Server/Web/'
```

打开浏览器, 访问http://localhost:19910/index.php