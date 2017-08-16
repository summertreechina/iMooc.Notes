//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

// 内部参数名？ 外部参数名？ 好晕
// 外部参数名可以在函数调用的时候对于参数有更加直观的认识。即该参数名对外部可见。
// http://www.cnblogs.com/zeyang/p/4398066.html
// 如果定义了外部参数名，在调用的时候就必须使用外部参数名

func welcomToName( name: String, with message: String ) -> String {
    return message + " " + name
}

welcomToName(name: "little nn", with: "Hello ")

func welcom(name: String, message: String) -> String {
    return message + " " + name
}

welcom(name: "nn", message: "Hello")

// 希望调用的时候省略掉参数名的做法
func gcd(_ a: Int, _ b: Int) -> Int {
    return 0
}

gcd(4, 9)
//  语义化的改进
func add(_ a: Int, and b: Int) -> Int {
    return a + b
}
add(3, and: 4)

// 在swift语言中函数的参数默认是一个常量，可以在参数前添加let关键字的，但是在swift3中关键字let不允许添加了
//func my(let name: String, let something: String) -> String {
//    return name + "do" + something
//}
func my(name: String, something: String) -> String {
    return name + " do " + something
}
my(name: "nn", something: "eat")

// swift3强制规定所有的参数都必须是常量，不必再次声明。但是递归时就遇到麻烦了，解决方法如下：
func toBinary( num: Int ) -> String {
    var localNum = num
    var res = ""
    
    repeat{
        res = String( num%2 ) + res
        localNum /= 2
    } while localNum != 0
        return res
}


















