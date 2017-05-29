<?php
>>>开发一个PSR-0 的基础框架
>>> PSR（PHP Standard Recommendation）
PSR-0规范:
1.命名空间必须'与绝对路径一致'
2.类名'首字母必须大写'
3.除了入口文件外，其他'.php'必须只有一个类


开发符合PSR-O规范的基础框架
1.全部必须'使用命名空间'
2.所有php文件必须自动载入,不能有 'include/require'
3.单一入口，也就是 'index.php' 不能有第二个可以执行的文件
4.类型 和 文件名 '必须保持一致'
5.'命名空间' 要跟文件夹目录保持一致

$res = 'http://www.cgtblog.com/jishu/535.html';

0：自动加载（主要是针对 PHP 5.3 以前没有命名空间的版本）
1：编码规范
2：编码风格推荐
3：Log 结果
4：自动加载更细（在出现命名空间后有很大的改变）
7：HTTP 消息接口

>>> Composer
composer 和 Pear、Pecl 都不同，它不仅仅是用于安装扩展，更重要的是定义了一种现代 PHP 框架的实现和扩展管理的方法。类似 node.js 的 npm、Python 的 pip 但又比以上做的更多。


spl_autoload_register() 这个函数是个神奇的函数
不一般，好像具有回调函数的能力，在调用、注册某个类的时候，会产生一个 $class 的参数。
spl_autoload_register() — 注册给定的函数作为 __autoload 的实现


?>