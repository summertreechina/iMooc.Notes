# 服务器端链接数容量

##### MeepoPS的链接数上限?
- 采用Select轮询机制的MeepoPS, 链接数上限取决于PHP的限制.
- 采用Libevent事件机制的MeepoPS, 链接数没有上限. 但是, 操作系统对此有限制. 单个进程的链接数上限取决与操作系统. 超过上限时, 会提示"too many open files". 因为对于Linux来说, 每一个套接字, 都是打开一个文件.
- 以下示例我们设置打开文件数为65535, 但这远远不是上限, 只是个栗子.

使用如下命令查看单个进程的限制.
```bash
ulimit -n
```

###### 临时修改ulimit的值:
```bash
ulimit -HSn 65535
```
此时, 8进程的MeepoPS的实例可以接受65535 * 8 = 524280个链接同时在线. 关闭终端后, 修改失效.

###### 永久修改ulimit的值:
需要修改文件/etc/security/limits.conf
```bash
sudo vim /etc/security/limits.conf
```
再最下面加上如下语句:
```
* soft nofile 65535
* hard nofile 65535
root soft nofile 65535
root hard nofile 65535
```
重新启动服务器后, 8进程的MeepoPS的实例可以接受65535 * 8 = 524280个链接同时在线.