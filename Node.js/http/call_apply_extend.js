function Pet(words) {
	this.words = words;
	this.speak = function() {
		console.log(this.words);
	}
}

function Dog(words) {
	Pet.call(this, words);
	// Pet.apply(this, arguments);
}

let dog = new Dog('Wang');

dog.speak();

// 'wang'

`this 通常指向函数（方法、行为）的拥有者；this 只能在函数内部使用；上下文：函数定义时的上下文；函数运行时的上下文；函数上下闻的改变`
