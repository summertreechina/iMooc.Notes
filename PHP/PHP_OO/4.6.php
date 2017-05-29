<?php 
接口
	1.类的方法必需有实现，接口的方法必需为空
	2.定义接口为 interface 关键字
	3.类使用接口为 implements 关键字  // implements 使生效
	4.接口可以继承接口
	5.不能实例化接口
	6.可以用 instanceof 关键字来判断某个对象是否实现了某个接口 // 实例

interface A {
	public function eat($food);
}

class Human implements A
{
	public function eat($food) {
	}
}

if ($obj instanceof A) { }

 ?>