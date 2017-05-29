<?php
namespace IMooc;

/**
* 
*/
class Loader
{
	
	function __construct()
	{
		echo __NAMESPACE__ . "<br/>" . __CLASS__ . "<br/>";
	}

	static function autoload($class) {
		// 这个$class 是拜 spl_autoload_register 所赐。
		$class = str_replace('\\', '/', $class);

		$path_file = BASEDIR.'/'.$class.'.php';
		require $path_file;
	}



}









?>