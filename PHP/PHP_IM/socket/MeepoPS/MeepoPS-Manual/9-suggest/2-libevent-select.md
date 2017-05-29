# Libevent和Select

- Libevent是不是一定会比Select好?
- 是不是一定要安装Libevent扩展?

##### Select是什么?
Select是一个轮询机制.

##### Select是怎么工作的
比如监听着一千个链接, 哪个链接有动态变化, Select需要遍历一边这一千个链接才能找到. 这就叫轮询机制.

##### Libevent是什么?
Libevent是PHP的扩展, 一个事件机制. 采用epoll等高效模型.

##### Libevent是怎么工作的
比如监听着一千个链接, 哪个链接有动态变化, Libevent能立马找到, 因为是事件监听机制.

##### Select和Libevent比较
- 同时在线的链接数较少(几个, 几十个)的时候, Select明显优于Libevent.
- 同时在线的链接数较多的时候, Libevent优于Select, 并且随着链接数越来越多, Libevent的优势越突出.

##### Select的致命性
默认情况下, Select只能接受1024个链接. 想要突破这个限制, 需要重新编译PHP. 使用--enable-fd-setsize=2048.