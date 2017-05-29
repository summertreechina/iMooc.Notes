<?php 
1.__tostring()方法 '对象''被当作'string（字符串）使用时（如echo $obj),此方法自动调用,此方法中须返回(return)一个'字符串'
2.__invoke()方法 '对象''被当作'方法调用时（如 $obj() ），此方法自动调用
3.必须是 return !

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
}
$magicer = new Magic();
echo $magicer;
echo $magicer();



 ?>