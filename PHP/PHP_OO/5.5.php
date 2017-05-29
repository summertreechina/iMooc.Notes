<?php

__clone();

class Magic
{
	public $name;
	
	function __construct()
	{
		echo "构造完成 \n";
	}
	function __destruct() {
		echo '';
	}
	public function __tostring() {
		return "被当作了字符串使用 \n";
	}
	public function __invoke() {
		return "被当作方法使用 \n";
	}
	public function __call($name,$argument) {
		echo "不存在的方法 \n";
	}
	public static function __callStatic($name,$argument) {
		echo "不存在的静态方法 \n";
	}

	public function __set($a, $b) {
		echo "对不可访问属性赋值了 \n";
	}
	public function __get($a) {
		echo "读取了不可访问属性 \n";
	}

	public function __isset($a) {
		echo "调用isset()或empty() \n";
	}
	public function __unset($a) {
		echo "调用unset() \n";
	}

	public function __clone() {
		echo "在执行'克隆'操作时触发 \n";
		echo "与赋值运算不同的是，在克隆执行中可以定义一些操作，如‘变异率’ \n";
	}

}
$magician = new Magic();
echo $magician->name = 'Lily';
clone $magician;





?>