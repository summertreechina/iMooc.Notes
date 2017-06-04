>>> Zepto 的基本结构
	var Zepto = (function(){ ... })();
	window.Zepto = Zepto;
	window.$ === undefined && (window.$ = Zepto);

	解释
	> 定义一个匿名、闭包、自执行函数 返回值赋值给 Zepto， 
	然后将Zepto赋值给window对象

	> var Zepto = (function(){ ... })(); 返回的是一个变量||对象 '$'；
	> '$' 是什么？ $ 内储存的是一个函数， 可以这样调用 $()
	这不是跟'jQuery'的运行原理一样吗？
	知道'jQuery'为什么非要将操作对象 $() 处理了，处理之后就拥有了'jQuery'的众多属性和方法了