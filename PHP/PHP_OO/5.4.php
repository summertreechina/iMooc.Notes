<?php
1.在给不可访问属性赋值时，__set()会被调用 定义function __set($name,$value)
2.读取不可访问属性的值时，__get()会被调用 定义function __get($name)
3.当对不可访问属性调用isset()或empty()时，__isset()会被调用
4.当对不可访问的属性调用unset()时，__unset()会被调用
5.属性重载只能在对象中进行。在静态方法中，这些魔术方法将不会被调用。所以这些方法都不能被声明为 static
6.Method Magic::__set() must take exactly 2 arguments
(对内是高内聚)，(对外是低耦合)
class Magic
{
	
	function __construct()
	{
		echo "构造 \n";
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

}
$magicer = new Magic();
isset($magicer->oo);
empty($magicer->oo);
unset($magicer->nn);
	// 构造 
	// 调用isset()或empty() 
	// 调用isset()或empty() 
	// 调用unset() 
	// [Finished in 0.1s]






?>