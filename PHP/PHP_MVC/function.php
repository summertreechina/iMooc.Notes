<?php
// 框架级函数

function C($contr_name, $method) {
	// 原则上控制器是不允许带有自己的参数
	echo '大C函数'."<br/>";
	require_once( "./libs/Controller/{$contr_name}Controller.class.php" );
	$contr = $contr_name. "Controller";
	( new $contr() )->$method();
}

function M($model_name) {

	echo '大M函数'."<br/>";

	require_once( "./libs/Model/{$model_name}Model.class.php" );
	$model = $model_name."Model";
	$obj = new $model();
	return $obj;
}

function V($view_name) {
	require_once( "./libs/Controller/{$view_name}View.class.php" );
		eval( "$ojb = new {$view_name}View()" );
	return $obj;
}

// 剥离违法参数
function daddslashes($str) {
	return ( !get_magic_quotes_gpc() ) ? addslashes($str) : $str;
}

function ORG($path, $name, $params = array()) {
	require_once("./libs/_ORG/{$path}/{$name}.class.php");

	$obj = new $name();

	if (!empty($params)) {
		foreach ($var as $k => $v) {
			$obj->$k = $v;
		}
	}
	// print_r($obj);exit();
	return $obj;
}



?>