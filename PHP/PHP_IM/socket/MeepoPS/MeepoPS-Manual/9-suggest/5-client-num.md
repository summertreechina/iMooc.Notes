# 客户端链接数容量

##### 客户端能发起多少个链接?
对于客户端来说, 一个链接就要占用一个端口. 当端口耗尽时, 客户端就不能再继续新增链接了. 这种问题在单机压测时经常会遇到.

###### 永久修改生效的办法:
需要修改文件/etc/sysctl.conf, 使端口可以复用.
```bash
sudo vim /etc/sysctl.conf
```
再最下面加上如下语句:
```
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_tw_recycle = 1
```
运行
```bash
sudo sysctl -p
```