4.1 动态原型模式
function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype.getName = function () {
            console.log(this.name);
        }
    }
}

var person1 = new Person();

注意：使用动态原型模式时，不能用对象字面量重写原型

解释下为什么：

function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype = {
            constructor: Person,
            getName: function () {
                console.log(this.name);
            }
        }
    }
}

var person1 = new Person('kevin');
var person2 = new Person('daisy');

// 报错 并没有该方法
person1.getName();

// 注释掉上面的代码，这句是可以执行的。
person2.getName();


为了解释这个问题，假设开始执行 var person1 = new Person('kevin')。

如果对 new 和 apply 的底层执行过程不是很熟悉，可以阅读底部相关链接中的文章。

我们回顾下new的实现步骤：

1.首先新建一个对象
2.然后将对象的原型指向Person.prototype
3.然后Person.apply(obj)
4.返回这个对象
注意这个时候，回顾下apply的实现步骤，会执行obj.Person 方法，这个时候就会执行if语句内的内容，注意构造函数的prototype属性指向了实例的原型，使用字面量方式直接覆盖Person.prototype，并不会更改实例的原型的值，person1依然是指向了以前的原型，而不是Person.prototype。而之前的原型是没有getName方法的，所以就报错了！

如果你就是想用字面量方式写代码，可以尝试下这种

function Person(name) {
    this.name = name;
    if (typeof this.getName != "function") {
        Person.prototype = {
            constructor: Person,
            getName: function () {
                console.log(this.name);
            }
        }

        return new Person(name);
    }
}

var person1 = new Person('kevin');
var person2 = new Person('daisy');

person1.getName(); // kevin
person2.getName();  // daisy

