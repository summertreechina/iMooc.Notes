// 2. 构造函数模式
function Person(name) {

    this.name = name;
    this.getName = function () {
        // console.log(this.name);
        return this.name;
    };

}

var person1 = new Person('kevin');
debug(person1.getName());
debug(person1.name);
优点：实例可以识别为一个特定的类型
缺点：每次创建实例每个方法都要被创建一次

解析:{
	1.声名一个大写函数，并传给其必要的参数，将参数赋值给其本身作为属性
	2.跟PHP最基础的类已经非常像了，它形式上是函数，本质上是类，实例化就是赋值和构建的过程，但是它没有 __construct()魔术函数
}