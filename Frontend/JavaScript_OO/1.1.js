// 'JavaScript深入之创建对象的多种方式以及优缺点'
// 'https://segmentfault.com/a/1190000009359984?utm_source=weekly&utm_medium=email&utm_campaign=email_weekly'

// 1.工厂模式
function createPerson(name) {

    var o = new Object();
    o.name = name;
    o.getName = function () {
        // console.log(this.name);
        debug(this.name);
    };

    return o;

}

var person1 = createPerson('kevin');

缺点：对象无法识别，因为原型都指向Object

原理:{
	1.声明一个函数，在函数内声明一个对象并对其添加相应的属性和方法，最后返回这个内建的对象
	2.
	3.原来对比着学，效率是这么的高啊
}









