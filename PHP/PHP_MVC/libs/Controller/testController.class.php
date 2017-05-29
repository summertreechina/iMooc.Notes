<?php
/**
* 
*/
class testController
{
	function __construct()
	{
		echo 'test控制器被实例化了'."<br/>";
	}

	public function show() {

		global $view;
		$testModel = M('test');
		$data = $testModel->get();

		$view->assign('nanana', $data);
		var_dump($view);
		$view->display('test.tpl');
	}





}





?>