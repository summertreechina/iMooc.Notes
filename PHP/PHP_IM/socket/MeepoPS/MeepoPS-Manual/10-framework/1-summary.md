# 在框架中如何使用MeepoPS

### MeepoPS能不能和市面上的开发框架一同使用?
答案肯定是可以的。MeepoPS不但可以单独使用, 也可以同MVC框架一同工作。

### 是否需要修改MeepoPS的代码?
不需要!

### 框架中如何使用MeepoPS?
- MeepoPS当作一个扩展、一个插件、一个代码包。只要引入MeepoPS/index.php即可。
- 无论是框架中、脚本中, 只要include进来MeepoPS/index.php, 就没有问题了。任何一个插件都是这样使用的。
- PHP中一些很热门的插件, 和使用MeepoPS是一个道理。 无论是PHPMail、PHPExcel、PHPWord、LaneWeChat等等。

### 通用思路
将MeepoPS引入传统Web开发的的MVC框架中, 通常需要解决两个问题。
1. 引入。将MeepoPS放在某个你喜欢的路径中, 在框架中的某个Controller中写一个方法, 作为启动程序。在这个方法中require_include '****/MeepoPS/index.php'即可。
2. 数据库。由于传统Web是每次请求都链接一次Mysql, 请求结束时断开和Mysql的链接。而MeepoPS是常驻内存的, 与Mysql的链接是一直保持的, 因此, 如果某次数据库的操作抛出了链接无效的异常, 需要重连。

### 贡献
框架有无数, 鄙人见识和精力所限不能一一说明。各位同学在使用MeepoPS中, 是如何集成到其他框架中的, 请在本目录下新建一个.md文件进行说明并署名, PR给我, 我来Merge。谢谢!