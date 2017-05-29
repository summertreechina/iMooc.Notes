<?php
// require_once('./test1.class.php');
// require_once('./test2.class.php');
new wwy\test1;
new mnn\test2;
test1::test();
test2::test();



	// 过去的方法 通过自定义完成 在5.3之后废弃 因随着项目变大多次__autoload 报重复定义
	function __autoload($clsn) {

		require_once( __DIR__."/".$clsn.".class.php" );
		// require_once( ' ./test1.class.php ' );
		// require_once( ' ./test2.class.php ' );
	}

	现在使用 spl_autoload_register() 方法
	在页面顶部使用 可以定义多个 autoload 函数
	sql_autoload_register('autoload1');
	sql_autoload_register('autoload2');

85916596
?>