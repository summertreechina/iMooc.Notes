<?php 
'http://www.imooc.com/video/13450'
>>确认下载版本：
--从官方介绍中找兼容版本

1.直装
--如果解压出来的是*.so的文件，直接将此文件拷贝到PHP的扩展目录
2.编译安装
--如果解压出来的是众多*.h，*.c文件，需要进行编译安装
----phpize?
------phpize是用来扩展PHP扩展模块的
------通过phpize可以建立PHP的外挂模块
------"告诉PHP，我要安装PHP扩展了，我给你挂载好，我要开始编译了喔"
---->在你的解压扩展目录下执行phpize 如/usr/local/php/bin/phpize
---->配置编译参数
------"./configure -with-php-config=/usr/local/php/bin/php-config"
------执行这个文件的目的是帮我们自动的写一些PHP的配置参数
--------如果配置信息出错，需要安装'autoconf'
--------怎样安装？
--------'centos/redhat'下执行'yum install autoconf';
--------'ubuntu/debian'下执行'apt-get install autoconf';
--------'Mac OS/OS X'下执行'brew install autoconf';
---->编译和安装
------'make && make install'
---->复制扩展文件到相应的目录
---->到配置文件，开启相应的扩展参数
---->重启php-fpm

 ?>
