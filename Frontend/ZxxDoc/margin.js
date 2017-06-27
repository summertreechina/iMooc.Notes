>>> 3-1 margin重叠
	1. margin重叠的通常特性 {
		1. margin重叠只发生在block元素上。（不包括absolute和float定位）
		2. margin重叠只发生在垂直方向（特例：不考虑writing-mode，像古文一样从上往下写，margin-top/margin-bottom）
	}
	2. margin重叠的三种情形 {
		1. 相邻的兄弟元素（比如P元素）
		2. 父元素和第一个、最后一个子元素发生重叠（表现在子元素设置了margin却不能将父元素的高度撑起，反而将他们推离相邻的元素）
			>>> 解决办法
			1. 父元素非块状格式化上下文（如父元素添加 overflow:hidden 属性）
			2. 为父元素设置上边框
			3. 为父元素设置 padding-top 值
			4. 在父元素与子元素之间插入inline-block元素，如空格
			5. 给父元素设置高度
		3. 空的block元素自身发生重叠
	}
	3. margin重叠的计算规则 {
		1. 正正取最大值
		2. 正负取相加值
		3. 负负取最小值
	}
