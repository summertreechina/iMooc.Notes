<?php
>>> Smarty 类与对象的赋值与使用

第一种 是用 smarty 的register_object 方法 在Smarty3中已经废除

第二种 使用 assign 把一个类的对象以变量的形式赋值到 smarty 模版中使用

	// $obj_smarty->assign('obj_value',$obj_name);
	// 在模版文件name.tpl里
	// {$obj_value->get('参数')}

	$my_obj = new My_obj();
	$smarty->assign('my_obj', $my_obj);
	$smarty->display('test.tpl');
	tpl模版
	{$my_obj->method()}

?>