# 接口对象的通用属性: childProcessCount

- 名称: childProcessCount.
- 类型: int.
- 描述: childProcessCount用来表示需要多少个子进程来处理这个接口类文件.
- 默认: 开发者可以不设置, 默认值是1.
- 提示: 启动的子进程数量通常为CPU核心数. 在CPU使用率过高而内存占用较低时, 可适当降低子进程数量. 在内存占用过高而CPU使用率较低时, 可适当增加子进程数量.

### 示例: 
这是我们自行编写的代码: demo.php 
```php
<?php
//引入MeepoPS
require_once 'MeepoPS/index.php';

//使用文本传输的Telnet接口类
$telnet = new \MeepoPS\Api\Telnet('0.0.0.0', '19910');

//启动的子进程数量. 通常为CPU核心数
$telnet->childProcessCount = 4;

//启动MeepoPS
\MeepoPS\runMeepoPS();
```