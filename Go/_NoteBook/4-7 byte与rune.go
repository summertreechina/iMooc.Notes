// {
// 	`http://www.imooc.com/code/7238`
// }
package main

import (
	"fmt"
)

func main() {
	// 声明一个rune类型变量并赋值
	var char1 rune = '赞'

	// 这里用到了字符串格式化函数。其中，%c用于显示rune类型值代表的字符。
	fmt.Printf("字符 '%c' 的Unicode代码点是 %s。\n", char1, ("http://unicode-table.com/cn/"))
}
