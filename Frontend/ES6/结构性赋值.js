// 原来
let a = 2
let b = 6
let c = 8

// 如果有大量变量需要赋值，结构会比较冗余

// 一种解决办法是利用json赋值
let {a, b, c} = { a:2, b:6, c:8}
// json赋值的好处是有结构性一一对应，即使顺序调整赋值结果也不会乱，因此可以写成：
let {a, b, c} = { b:6, a:2, c:8}

// 给默认值的简易用法
var a = json.a || 12
// 新写法 
var {a=12, id=6} = {}

// ES6新语法
// 注意，两边结构必需完全一致
let [a, b, c] = [2, 6, 8]
