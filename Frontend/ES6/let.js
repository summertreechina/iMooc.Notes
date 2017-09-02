'ES5没有块级作用域名（使用的是var）let为javascript增加了块级作用域，用它所声明的变量，只在let命令所在的代码块内有效。（大括号包围则形成一个块级作用域，如函数、循环、判断、选择等结构）'

	let name = 'zach'
	while (true) {
	    let name = 'obama'
	    console.log(name)  //obama
	    break
	}
	console.log(name)  //zach

>>> 'var会带来计数的循环变量泄露为全局变量的问题'
	var a = [];
	for (let i = 0; i < 10; i++) {
	  a[i] = function () {
	    console.log(i);
	  };
	}
	a[6](); // 6

>>> '闭包问题'
	function iteratorFactory(i){
	    var onclick = function(e){
	        console.log(i)
	    }
	    return onclick;
	}
	var clickBoxs = document.querySelectorAll('.clickBox')
	for (var i = 0; i < clickBoxs.length; i++){
	    clickBoxs[i].onclick = iteratorFactory(i)
	}
	//或者这样写
	for(var i = 0; i < clickBoxs.length;i++){
	    clickBox[i].onclick = (function(index){
	        return function(){
	            console.log(index);
	        }
	    })(i)
	}


	(function(){
		// 封闭空间
		// 自执行函数
	})();

	{
		// 现在的自执行函数（但它不是函数，效果是一样的）
		// 利用封闭空间的原理
	}


