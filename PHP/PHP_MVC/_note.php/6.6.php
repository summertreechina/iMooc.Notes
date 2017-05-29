<?php
1.在Smarty模板中使用php内置函数
	{'f'|str_replace:'ew':$stra}
	{参数1|函数名:参数2:参数3:参数4:…}
	{变量|PHP内置函数名:参数2:参数3:参数4:…}

2.Smarty自定义函数及其注册
	1).php中定义一个函数( Smarty 将所有的参数添加到一个以参数名创建的数组[$params]后,传递给 Smarty 的注册函数)
	function test($param){
			$p1=$param['p1'];
			$p2=$param['p2'];
			return '参数1：'.$p1.'参数2：'.$p2;
		}
	以数组形式传给函数里面

	2).将其注册如smarty中
	$smarty->registerPlugin('function','f_test','test');
	$smarty->registerPlugin('类型','模版中的函数名','PHP文件中的函数名');
	function:要注册入Smarty的代码类型
	f_test:注册到sm后的函数名
	test:要注册的在PHP中定义了的函数的函数名
	3). tpl 模版中调用
	{function_name, param1, param2, param3}
	注: smarty 会将几个参数打包成一个数组 在自定义函数是要注意

?>