>>> 'window'和'document'有什么区别
	'http://www.imooc.com/learn/608'
	window值得就是浏览器的窗口,包括工具栏,地址栏等等
	window一般可以省略
	window.alert() === alert()

	> Document对象是Window对象的一部分
	document.body === window.document.body

	浏览器的html文档成为document对象

>>> window.location 和 document.location 的区别

	1. window 对象的 location 属性引用的是 'Location 对象',表示该窗口中当前显示文档的URL

	2. document 对象的 location 属性同样也是引用的 'Location 对象'

	所以 window.location === document.location 
	so:
	location.href=xxx
	window.location.href=xxx
	document.location.href=xxx