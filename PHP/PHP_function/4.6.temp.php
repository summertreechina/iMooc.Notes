<?php 


class C
{
	function __construct()
	{
		echo "C"."\n";
	}
}


class B
{
	function __construct()
	{
		echo "B"."\n";
	}
}


new C;
new B();

class A {private $x = 1;}
// PHP 7 之前版本的代码
$getXCB = function() {return $this->x;};
$getX = $getXCB->bindTo(new A, 'A'); // 中间层闭包
echo $getX();
// PHP 7+ 及更高版本的代码
$getX = function() {return $this->x;};
echo $getX->call(new A);


 ?>