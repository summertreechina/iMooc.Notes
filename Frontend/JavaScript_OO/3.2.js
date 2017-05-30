3.2 原型模式优化

function Person(name) {

}

Person.prototype = {
    constructor: Person,
    name: 'kevin',
    getName: function () {
        return this.name;
    }
};

var person1 = new Person();
debug(person1.getName())

优点：实例可以通过constructor属性'找到所属构造函数'
缺点：原型模式该有的缺点还是有

class: {
	1.看不太明白了 'constructor: Person' 是啥？
	2.
}