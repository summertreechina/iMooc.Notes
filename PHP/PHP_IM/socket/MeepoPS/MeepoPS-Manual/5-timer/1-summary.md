# 定时器

- MeepoPS 借助alarm信号模拟实现了定时器任务. 可以指定一次性定时器任务(10秒以后运行), 或者永久性定时任务(每隔10秒运行).

- 值得一提的是, 同一个进程内, 定时器是顺序执行的, 比如10秒后抓去百度首页并保存的Mysql, 11秒后讲数据发送给某个用户. 这时, 在抓去百度首页和保存到Mysql的时候都涉及到了网络IO, 既然是网络IO就有可能会超时, 如果这项任务执行了5秒钟, 那么之前预定的11秒后发送数据给用户的操作就会被推迟执行. 因为是顺序执行的.

- 设置了1秒后执行某某操作, 但是, 某某操作启动的时候绝不可能是1秒整. Linux内核发送alarm信号给MeepoPS是需要时间的, MeepoPS在定时器任务列表中找到这项任务也是需要时间的. MeepoPS内核调用您设置的回调函数也是需要时间的. 所以误差肯定会有. 但是肯定是在个位数的毫秒级别.

- 如果有事件机制(Select或者Libevent), 则不在使用Alarm信号, 而是使用事件机制. 但是对于您来说, 只有事件机制的定时器, 不存在Alarm信号的定时器.