# 声明

### 操作系统与扩展
- 绝大多数的PHP应用都部署在Linux服务器. 因此你可以使用Apple Mac(OS X), CentOS, Ubuntu, Red Hat, Fedora, FreeBSD等类Unix操作系统来启动MeepoPS.
- MeepoPS不支持非类Unix操作系统, 例如Windows.
- Windows用户可以安装VirtualBox, Vmware等虚拟机软件来运行MeepoPS.
- MeepoPS需要PHP的POSIX库. POSIX是PHP默认安装的, 通常情况下你不需要手动安装. 如何安装: [PHP手册-POSIX安装](http://php.net/manual/zh/posix.installation.php)
- 多进程及信号处理需要依赖PHP的PCNTL库. MeepoPS深度依赖PCNTL, 因此PCNTL库是必须安装的, 即使只启动一个进程的MeepoPS, 仍然需要安装PCNTL. 如何安装: [PHP手册-PCNTL安装](http://php.net/manual/zh/pcntl.installation.php)
- 在大规模访问下, 我们建议安装PHP的PECL扩展Libevent, 但这不是必须的. 在高链接数的场景下, Libevent表现优异. 如何安装: [PHP手册-Libevent安装](http://php.net/manual/zh/libevent.installation.php). 截止2016-05-06, PHP官方的Libevent扩展不支持PHP7, PHP7下的Libevent安装方法: [PHP7的Libevent分支](https://github.com/expressif/pecl-event-libevent). PHP的Libevent扩展需要Linux的库libevent. 安装Libevent：`sudo yum -y install libevent libevent-devel`
- 默认监听链接的方式为Select轮询机制. PHP的Select轮询机制最多只能监听1024个链接. 想要突破这个限制, 要么安装Libevent, 要么使用--enable-fd-setsize=2048重新编译安装PHP.
