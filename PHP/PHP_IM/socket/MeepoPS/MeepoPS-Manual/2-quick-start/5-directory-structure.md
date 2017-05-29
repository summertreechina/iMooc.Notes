# 目录结构
```
MeepoPS-PHP
  -- Doc
     -- zh
        README.md
  -- Example
  -- MeepoPS
     -- Api
     -- Core
        -- Event
        -- ApplicationProtocol
        -- TransportProtocol
     config.ini
     index.php
  -- Test
  demo-telnet.php


Doc为Markdown格式的文档.
   zh目录是中文文档
      README.md是文档目录
      
Example是示例
   一个目录是一个独立的项目, 直接在该项目目录下`php ***_server.php start`运行即可.
      
MeepoPS是MeepoPS的代码目录.
   Api是暴露给外部用户使用的接口类文件所在目录. 所有文件均是一个类, 用户在自己的代码中继承该类即可.
   Core是MeepoPS的核心代码. 如果不是有把握, 我们不建议修改其中的任何一个文件.
      Event是事件机制类所在目录. 优先选择Libevent, 若没有安装PHP扩展Libevent, 则使用Select
      ApplicationProtocol是应用层协议所在目录. 有Telnet协议, HTTP协议, WebSocket协议等
      TransportProtocol是传输层协议所在目录. 目前仅有TCP协议.
   config.ini是配置文件, 采用php.ini相同的语法规则.
   index.php是MeepoPS的入口文件. 用户自行编写的业务逻辑代码中必须引入index.php
   
Test是测试用例.

demo-telnet.php是启动MeepoPS的demo
```