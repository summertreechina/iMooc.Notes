<?php
// 数据访问
1.parent 关键字 可以可用于 调用父类中 被子类重写的方法
2.self 关键字 可以用于访问 类自身的 成员方法，静态成员(静态属性+静态方法) 和 类常量；但 不能用于 访问类自身的 非静态属性(非静态属性 会根据 不同的对象的赋值 而不同,非静态方法 不存在这个问题)！！！
self 在使用常量时 不需要在 常量const名称 前面添加 $符号
3.static:: 关键字用于访问类自身定义的静态成员，访问静态属性时 需要在属性 前面 添加$符号。
4.常量属性 const 不能使用对象访问，仅能使用类访问，在类本体内 可以使用 self::常量名，在类本体外 可以使用 类名::常量名

class BaseClass
{
	
	function __construct($argument)
	{
		# code...
	}
}

class ChildClass extends BaseClass
{
	
	function __construct($argument)
	{
		# code...
	}
}







 ?>