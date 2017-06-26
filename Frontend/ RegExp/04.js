	>>> JavaScript正则对象属性
	. global: 是否全文搜索，默认 false
	. ignore case: 是否大小写敏感，默认 false
	. multilime: 是否多行搜索，默认 false
	. lastIndex: 是当前表达式匹配内容的最后一个字符的下一个位置 (指针)
	. source: 正则表达式的文本字符串

	>>> JavaScript正则表达式相关方法
	RegExp.prototype.test(str);{}
	RegExp.prototype.exec(str);{
		返回结果带有 2 个属性
		- index 声明匹配文本的第一个字符的位置
		- input 存放被检索的字符串 string
	}

 
	>>> 字符串对象的正则表达式方法
	Stringl.prototype.search(reg);{
		search 方法返回第一个匹配结果 index ,查找不到返回 -1
		search() 方法不执行全局匹配,它将忽略标志 g ,并且总是从字符串的开始进行检索。
		'a1b2c3d4e'.split(/\d/g) 得到["a","b","c","d","e"]
		'a,b,c,d'.split(/,/) 得到 ["a","b","c","d"]
	}