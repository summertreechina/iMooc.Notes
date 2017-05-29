# 监控系统数据采集(Agent)
监控系统数据采集是指, 一台服务器作为服务端, 启动monitor_server_status_server.php. 然后, 在待采集的机器上, 全部启动monitor_server_status_client.php.

### monitor_server.php 是服务端.
使用:
```bash
sudo php monitor_server_status_server.php start
```
启动. 

守护进程模式启动使用:
```bash
sudo php monitor_server_status_server.php start -d
```
启动后监听19910端口, 接收数据. 在启动时, 每启动一个子进程, 这个子进程都会初始化一个Mysql链接.这个进程内的所有链接都可以使用.

Mysql的链接信息请自行修改为自己的IP, 账号, 密码, 数据库名, 端口.

接收客户端发来的数据, 将数据写入Mysql中. 客户端发来的数据是内存和CPU的使用情况. 大家可以根据实际需要, 从Mysql读取出来绘制折线图等.

### monitor_server_status_client.php 是客户端.
在命令行
```bash
nohup php monitor_server_status_client.php &
```
启动即可.

客户端每秒向服务端发送内存和CPU的使用情况.


### Mysql
- 默认库名: meep_ops
- 默认表名: moni_2015-05-25

表结构:
```
CREATE TABLE `moni_2016-05-25` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) DEFAULT NULL,
  `cpu_sys` float DEFAULT NULL,
  `cpu_user` float DEFAULT NULL,
  `memory` float DEFAULT NULL,
  `create_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1;
```