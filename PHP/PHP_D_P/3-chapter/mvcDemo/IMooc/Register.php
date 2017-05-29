<?php
// 注册模式 注册器模式
/**
* 
*/
class Register
{
	protected static $objs = [];
	
	function __construct()
	{
	}

	public static function set($alias, $obj) {
		self::$objs[$alias] = $objs;
	}

	public static function get($name) {
		return self::$objs[$name];
	}

	public static function iunset($alias) {
		unset(self::$objs[$alias]);
	}



}




?>