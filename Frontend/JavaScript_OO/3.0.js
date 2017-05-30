3. 原型模式

function Person(name) {

}

Person.prototype.name = 'keivn';
Person.prototype.getName = function () {
    console.log(this.name);
};

var person1 = new Person();


优点：方法不会重新创建
缺点：1. 所有的属性和方法都共享 2. 不能初始化参数

class: {
	1.喔，这就是原型链的出处啊
	2.一个大写函数，实例化后将其各个属性附在原型链上，有的属性内存储的'行为'
}