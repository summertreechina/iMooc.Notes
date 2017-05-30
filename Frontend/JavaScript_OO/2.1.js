2.1 构造函数模式优化
function Person(name) {

    this.name = name;
    this.getName = getName;

}

function getName() {
    return this.name;
}

var person1 = new Person('kevin');

debug(person1.getName());

优点：解决了每个方法都要被重新创建的问题
缺点：这叫啥封装……

class: {
	1.每个方法都被重新创建一次难道不好吗？占用资源了？效率不高了？
	2.创建一个大写函数，传入参数，借用闭包的形式将外部的函数地奥入内部赋值给内部的属性，其实这个属性内储存的是一个定义好了的'行为'
}