<?php 
// 1.__call()方法：当对象访问不存在的方法名称时，此方法自动调用
// 	>>>①调用示例：public function __call($name,$argument){}
// 	>>>②注意：访问控制关键字必须为 public；必须有两个参数：对象访问的方法名称($name)、方法包含的参数($argument,数组)
// 2.__callStatic()方法：当对象访问不存在的方法名称时，此方法自动调用
// 	>>>①调用示例：public static function __callStatic($name,$argument){}
// 	>>>②注意：同1-②；此方法为静态方法(static)
// 3.这两种方法也被称为'方法的重载' 通过这两个方法，同一个方法的调用可以对应不同方法的实现（同一个方法的静态调用、动态调用对应不同的方法实现）
// 4.如果不设置该魔术方法，调用不存在的方法将会报错
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
}
$magicer = new Magic();
$magicer->oo(); 
$magicer::oo();
Magic::oo();




 ?>