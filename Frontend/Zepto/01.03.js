>>> 原型连的基础知识
	1. javascript 的'三座大山' '三个比较难懂的知识点'
	. 原型和原型链
	. 上下文环境和作用域
	. 单线程和异步



	1.'每一个函数'，都有一个'prototype'属性,无论是自定义的，还是系统内置的。都有一个'constructor'指向它本身。
		{
			let fn = function() {}
			fn 内部只包含两个内容: constructor 和 prototype
			fn.prototype.constructor === fn;	// true； 完全相等
		}
	2.所有通过函数'new'出来的东西，
	这个东西都有一个'__proto__'指向这个函数的'prototype',
	prototype:'显式原型'，__proto__:'（隐式）原型'。

	3.当你想要使用一个对象（或者一个数组）的'某个功能'时：如果该对象本身具有这个功能，则直接使用；
	如果该对象本身'没有这个功能'，则去'__proto__中找'。

	Array是函数，Object是函数，Function也是函数，大写的Function和小写的function不一样。



{
	var a = function() {
		console.log(1);
	}
	a.prototype
function a () {
	console.log(1);
}
a.prototype


}




