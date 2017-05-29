<?php
namespace IMooc;
/**
* 设计模式 单例模式
*/
class Database
{
	private $db;
	protected $db; // 设置为保护或者私有
	
	private function __construct() {
		// 强制、反常规将构造方法设定成私有 造成此类无法实例化
		echo __CLASS__ . "<br/>" . __TRAIT__ ;
	}

	static function getInstance() {
		// 检查$db是否赋值，未赋值将执行实例化 赋值则返回
		if (self::$db) {
			return self::$db;
		} else {
			self::$db = new self();
			return self::$db;
		}
	}


}




?>