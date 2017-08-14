package main

import (
	"fmt"
)

func main() {
	var (
		num1 int = 1
		num2 int = 2
		num3 int = 3
	)
	// num1, num2, num3 = 1, 2, 3
	// num1 = 1
	// num2 = 2
	// num3 = 3
	// 打印函数调用语句。用于打印上述三个变量的值。
	fmt.Println(num1, num2, num3)
}

// 注释：普通赋值，由关键字var、变量名称、变量类型、特殊标记=，以及相应的值组成。
// 若只声明不赋值，则去除最后两个组成部分即可。
// var num1 int = 1
//
// var num2, num3 int = 2, 3 // 注释：平行赋值
// var ( // 注释：多行赋值
//     num4 int = 4
//     num5 int = 5
// )
