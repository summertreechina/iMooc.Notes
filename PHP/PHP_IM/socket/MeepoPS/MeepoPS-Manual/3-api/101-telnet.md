# Telnet接口

接口类文件为: Api/Telnet.php

Telnet接口时指使用应用层Telnet协议来解析数据流的接口类文件。

使用Telnet接口, 只需要实例化Api\Telnet.php即可。

Telnet接口是MeepoPS所推出的首个接口文件, 简单, 轻便。 不但可以加速理解MeepoPS的使用方法和原理, 在实际业务中也有广泛的应用。

### 使用方法
使用时调用Telnet的接口即可。
```
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');
```

### 使用示例
请参考demo-telnet.php

### 特殊属性
无, 与[接口](../3-api)中所阐述的通用属性完全一致。

### 特殊方法
无, 与[接口](../3-api)中所阐述的通用方法完全一致。

了解Telnet是什么, 这里是 [传送门](../7-protocol/3-telnet.md)