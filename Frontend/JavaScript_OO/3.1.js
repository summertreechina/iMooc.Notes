3.1 原型模式优化

function Person(name) {

}

Person.prototype = {
    name: 'kevin',
    getName: function () {
        console.log(this.name);
    }
};

var person1 = new Person();

优点：封装性好了一点
缺点：重写了原型，丢失了constructor属性

class: {
	1.丢失了 constructor 属性？
}