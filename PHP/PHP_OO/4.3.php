<?php 
静态成员
static 

1.静态属性用于保存类的公有数据
2.静态方法里面 只能访问静态属性 因为静态属性和方法被创建时 可能还没有任何这个类的实例可以被调用
3.静态成员不需要实例化对象就能访问
4.类的内部可以通过 self 或者 static 关键字访问自身静态成员
5.可以通过 parent 关键字访问父类的静态成员
6.可以通过类的名称在类定义外部访问静态成员
7.static:: , self:: , parent::
/**
* 
*/
class NBA
{
	static $president;
	
	function __construct($name)
	{
		$this->president = $name;
		// echo "string";
	}

	Public static function change_president() {
		echo "chenge";
	}
}

$jobs = new NBA('jobs');
echo $jobs->president;
NBA::$president;
NBA::president;	>>> 没有 “$” 是错误滴

1.static方法是类中的一个成员方法,属于整个类,即使不用创建任何对象也可以直接调用!
2.静态方法效率上要比实例化高，静态方法的缺点是不自动进行销毁，而实例化的则可以做销毁。
3.静态方法和静态变量创建后始终使用同一块内存，而使用实例的方式会创建多个内存。
4.C++中，若类的方法前加了static关键字，则该方法称为静态方法，反之为实例方法。静态方法为类所有，可以通过对象来使用，也可以通过类来使用。但一般提倡通过类名来使用，因为静态方法只要定义了类，不必建立类的实例就可使用。静态方法只能用类的静态成员。



 ?>