>>> 读源码 先学其设计思想

	这个课程很有利于重新深入认识 JS 。

	JS 的东西， 数组、对象，你一声明它，它就天生的带有很多属性、方法，这是JS在生成它时赋予它的
	但是数组、对象，所拥有的属性、方法并不完全相同
	数组、对象可以互相转化，都有原型，可以对原型覆盖赋值，也可以对原型扩展

	
	arr.__proto__：prototype 打印原生的属性和方法
	arr.push(4);//使用push()方法给数组添加一个元素
	arr=>[1,2,3,4];
	arr.__proto__={
	    addClass:function(){alert(123);}
	}//修改数组的__proto__，只剩下addClaass()方法，调用不到push()方法了，如下
	arr.push(4);
	>undefined
	//并存式写法，再原有基础上添加addClass()方法，依然可以使用push
	arr.__proto__.addClass()=function(){alert(456);}
	arr.push(4);
	>[1,2,3,4]
	arr.addClass();
	>弹出456
