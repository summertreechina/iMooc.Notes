>>> arrow function(最常用的箭头函数)
	如果没有=>后没有{},则表示返回=>后的内容
	function(i){ return i+1; }//ES5
	(i) => i + 1;//ES6

	'如果方程比较复杂，则需要用{}把代码包起来'
	function(x,y){
	   x++;
	   y--;
	   return x+y;
	}
	(x,y) => { x++; y--; return x+y;}

	'长期以来，JavaScript语言的this对象一直是一个令人头痛的问题，在对象方法中使用this，必须非常小心。'
	class Animal {
	    constructor(){
	        this.type = 'animal'
	    }
	    says(say){
	        setTimeout(function(){
	            console.log(this.type + ' says ' + say)
	        }, 1000)
	    }
	}
	 var animal = new Animal()
	 animal.says('hi')  //undefined says hi
	//setTimeout中的this指向的是全局对象。

	. '解决办法'
	. '将this传给self，再用self指代this'
	says(say){
	          var self = this;
	          setTimeout(function(){
	             console.log(self.type + ' says ' + say)
	          }, 1000)

	. '采用bind（this）'
	says(say){
	          setTimeout(function(){
	              console.log(this.type + ' says ' + say)
	}.bind(this), 1000)//把window中的this指向当前的this

	. '箭头函数'
	. '当我们使用箭头函数时，函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。并不是因为箭头函数内部有绑定this的机制，实际原因是箭头函数根本没有自己的this，它的this是继承外面的，因此内部的this就是外层代码块的this。'
	class Animal {
	    constructor() {
	        this.type = 'animal';
	    }
	    says(say) {
	        setTimeout(
	            () => {
	                console.log(this.type + ' says ' + say)
	            }, 10000)
	    }
	}
	let animal = new Animal();
	animal.says("hua");

	. '方便回调函数定义'
	fetch(url).then((data)=>{
	  console.log(data);
	  //体现了回调函数的意义，拿到data了接着做什么
	})






