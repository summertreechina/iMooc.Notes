<?php
>>>路由地址的优化

1.去掉index.php  showScriptName
2.开启URL美化  enablePrettyUrl



.htaccess
<IfModule mod_rewrite.c>
<<<
	RewriteEngine on
	如果是一个目录或者文件，就访问目录或文件
	RewriteCond %{REQUEST_FILENAME} !-d

	如果文件存在，就直接访问文件，不进行下面的RewriteRule
	RewriteCond %{REQUEST_FILENAME} !-f

	RewriteRule .index.php
>>>
</IfModule> 
为什么老师讲课中没有'</IfModule> '标签呢，如果没有这个标签到底好用不好用呢？

>>>老师讲的方法不好使，还是从网上找的方法好使
>>>首先要查看apache改写服务是否开启，
$然后添加改写文件 = <<<NN
	<IfModule mod_rewrite.c>  
	RewriteEngine on  
	RewriteCond %{REQUEST_FILENAME} !-d  
	RewriteCond %{REQUEST_FILENAME} !-f  
	RewriteRule ^(.*)$ index.php/$1 [QSA,PT,L]  
	</IfModule>
NN;


>>>在前后端配置文件中添加一个设置项以美化url
'urlManager' => [
    'enablePrettyUrl' => true,
    'showScriptName'  => false,
    'suffix'          => '.html',
],



?>