>>> class extends super
	'原型、构造函数，继承引入了Class（类）这个概念。新的class写法让对象原型的写法更加清晰、更像面向对象编程的语法，也更加通俗易懂。'

	class Animal{
	    constructor(){//构造方法
	        this.type = 'animal'; //this关键字则代表实例对象
	    }
	    says(say){
	        console.log(this.type + ' says ' + say);
	    }
	}

	let animal = new Animal();
	animal.says("hello");

	class Cat extends Animal{
	    constructor(){
	        super();  //它指代父类的实例（即父类的this对象）。
	        this.type = 'cat'
	    }
	}
	let cat = new Cat();
	cat.says("hello");


	'constructor内定义的方法和属性是实例对象自己的，而constructor外定义的方法和属性则是所有实例对象可以共享的。'

	'super关键字，它指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。'

	'ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），然后再用子类的构造函数（constructor()）修改this。'