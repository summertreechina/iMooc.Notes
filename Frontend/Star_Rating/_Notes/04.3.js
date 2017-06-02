>>> 模板方法模式的基本知识

模板方法的基本结构

var Sweetheart = function() {

}

Sweetheart.prototype.look = function() {};
Sweetheart.prototype.say = function() {};
Sweetheart.prototype.kiss = function() {};
Sweetheart.prototype.sleep = function() {};
Sweetheart.prototype.init = function() {
	this.look();
	this.say();
	this.sleep();
	this.kiss();
};

var sh = new Sweetheart();
sh.init();


javascript 类的继承

var Parents = function() {
	'do something;'
}
Parents.prototype.foo1 = function() {};
Parents.prototype.foo2 = function() {
	throw new Error('这些是子类必须重写的方法。子类不写覆盖，将运行这个人为的错误抛出')
};
Parents.prototype.foo3 = function() {};
Parents.prototype.钩子方法 = function() { return false or true };
Parents.prototype.init = function() {
	this.foo1;
	this.foo2;
	this.foo3;
};

var Children = function() {

};
Children.prototype.fun1 = function() {};
Children.prototype.fun2 = function() {};
Children.prototype.fun3= function() {};

Children.prototype = new Parents();

var children = new Children();
// 调用父类的方法
children.init();



















