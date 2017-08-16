//: Playground - noun: a place where people can play

import UIKit

var str = "Hello, playground"

// swift3 的改变
// 2-1 舍弃了 ++ -- 运算符，统一只使用 += -= 运算符。因为旧写法有变量前、变量后之区分，不易读，容易引起困扰。

    var n = 0

    n += 1

    n += 1

    n += 1

    n += 1

    print(n)

    print("---------------------")


// 2-2 弃用C风格的for循环及如何创建灵活的循环

    for i in 0 ..< 10 {
        print(i)
    }
    print("---------------------")
    // 注意观察 ... 和 .. 点的重要区别
    // 优点 简洁；缺点 不灵活 不能实现倒枚举
    // 解决办法
    for k in (0...10).reversed() {
        print(k)
    }
    print("---------------------")

    // 拓展 步长设置 stride()
    for i in stride(from: 0, to: 10, by: 2) {
        print(i)
    }
    print("---------------------")
    for i in stride(from: 0, through: 10, by: 2){
        print(i)
    }
    print("---------------------")
    for i in stride(from: 10, through: 0, by: -2){
        print(i)
    }
    print("---------------------")