5.2 稳妥构造函数模式

function person(name){
    var o = new Object();
    o.getName = function(){
        console.log(name);
    };
    return o;
}

var person1 = person('kevin');

person1.sayName(); // kevin

person1.name = "daisy";

person1.sayName(); // kevin

console.log(person1.name); // daisy

所谓稳妥对象，指的是没有公共属性，而且其方法也不引用this的对象。

与寄生构造函数模式有两点不同：

新创建的实例方法不引用this
不使用new操作符调用构造函数
稳妥对象最适合在一些安全的环境中。

稳妥构造函数模式也跟工厂模式一样，无法识别对象所属类型。