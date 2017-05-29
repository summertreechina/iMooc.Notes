# 更新日志

### 2016-09-02 发布V0.0.5
- 新增三层模型Trident, 作为分布式、集群化、多进程通信的解决方案。
- 新增统计当前在线链接数。
- 新增示例-机器人客服系统, 基于WebSocket协议的客服机器人问答DEMO。
- 新增Docker仓库, Docker用户可以直接下载使用。
- 修复WebSocket协议在握手时的BUG。
- 手册放弃CMS, 采用Gitbook。

### 2016-07-01 发布V0.0.4
- 新增WebSocket接口、WebSocket协议。
- 新增WebSocket示例: 一个长链接, 每秒推送一次新数据, 动态绘制折线图。
- 启动/重启/停止时输出画面完善。
- 规范目录结构, MeepoPS/Core/Protocol更名为MeepoPS/Core/ApplicationProtocol, MeepoPS/Core/Transfer更名为MeepoPS/Core/TransportProtocol
- 修复HTTP协议在304时不返回HTTP头的Bug。
- 修复Select和Libevent调用delOne()方法时的Bug。

### 2016-06-17 发布V0.0.3
- 提供HTTP接口, 可以解析HTTP协议。 使得MeepoPS成为了一个简单的WebServer。在简单场景下, 可以取代Apache/Nginx来提供Web服务。

### 2016-05-31 发布V0.0.2
- FastWS更名为MeepoPS。
- 作为MeepoPS的首次亮相, 拥有Telnet协议及其接口, MeepoPS的核心程序均已完成。
- 长链接、多进程、可分布式的工作方式和核心功能已经可以使用。

### 2015-某月-某日 发布V0.0.1
- FastWS发布