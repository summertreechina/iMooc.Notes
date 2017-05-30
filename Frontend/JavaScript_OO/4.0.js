4. 组合模式

function Person(name) {
    this.name = name;
}

Person.prototype = {
    constructor: Person,
    getName: function () {
    	debugger;
    	return this.name;
    	console.trace()
    }
};

var person1 = new Person('nann');
debug(person1.getName())

优点：该共享的共享，该私有的私有，使用最广泛的方式
缺点：有的人就是希望全部写在一起，即更好的封装性