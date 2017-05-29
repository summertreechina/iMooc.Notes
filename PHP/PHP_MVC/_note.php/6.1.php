<?php
变量调节器，变量｜调节器名称
1. 首字母大写capitalize
｛$articleTitle|capitalize｝
2. 字符串连接cat
｛$articleTitle|cat:"yesterday."｝
3. 日期格式化 date_formate
 {$yesterday|date_format:"%A,%B %e,%Y %H:%M:%S"}
4. 为未赋值或为空的变量指定默认值default
｛$articleTitle|default:"no title"｝
5.转码 eacape 用语html转码，url转码，默认是html转码
｛$url|eacape:”url”｝
6.小写lower 大写 upper
｛$articleTitle|lower｝
｛$articleTitle|upper｝
7.所有的换行符替换成<br /> nl2br功能
｛$articleTitle|nl2br｝
8.其他函数
可以参见手册，原则上应该通过PHP直接处理完毕再赋值到smarty变量里，少用smarty函数

例如: 
wordwrap 行宽 -> 使用css样式来解决 truncate
截取 -> 使用PHP来截取 或使用css样式来解决 




?>