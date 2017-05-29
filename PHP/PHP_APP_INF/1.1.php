<?php 
$main_point = array(
	服务器端->数据库|缓存->调用接口->客户端 ,
	APP(通信)接口的定义:
	必须包含三个条件
	1.接口地址:'http://app.com/api.php?format=xml'
	2.接口文件:api.php 处理一些业务逻辑  
	3.接口数据:客户端开发工程师接受到数据 ->解析数据->显示在客户端

	);

数据格式基本是json和xml
C/S架构 请求不可见,只呈现内容!返回的是xml/json的数据格式
B/S架构 请求可见!返回的是html的数据格式  
发送http请求后返回数据
APP如何通讯：client----http---->service----feedback--->client

xml/json对比：
可读性：xml较好，典型的树形结构，逻辑清晰。而且还可以写注释。json可读性较差。
生成数据方面：json较好。
传输速度：json容量小，传输快。
特点：1.非常适合通信和传输 2.有唯一根节点 3.标签要有结束（两种形式）
PHP内置操作XML类：DomDocument/XMLWriter/SimpleXML


 ?>