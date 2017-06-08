>>> const
'const声明的是常量，不能改变当我们尝试去改变用const声明的常量时，浏览器就会报错。const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，用const来声明可以避免未来不小心重命名而导致出现bug：'

	const monent = require('moment')