媒体查询 css3媒体属性：
	width： 视口宽度
	height： 视口高度
	device-width： 渲染表面的宽度，屏幕宽度
	device-height： 渲染表面的高度，就是屏幕高度
	orientatio： 检查设备处于横向还是纵向
	aspect-ratio： 基于视口宽度和高度的宽高比
	device-aspect-ratio： 渲染表面的宽度，就是屏幕的宽度
	color： 每种颜色的位数 bits 如：min-color:16位，8位
	resolution： 检测屏幕或打印机的分辨率

	@media not|only mediatype and (expressions) {
	    CSS 代码...;
	}

	@media screen and (min-width: 480px) {
	    #leftsidebar {width: 200px; float: left;}
	    #main {margin-left:216px;}
	}
	all	用于所有多媒体类型设备
	print	用于打印机
	screen	用于电脑屏幕，平板，智能手机等。
	speech	用于屏幕阅读器
	
	not: not是用来排除掉某些特定的设备的，比如 @media not print（非打印设备）。
	only: 用来定某种特别的媒体类型。对于支持Media Queries的移动设备来说，如果存在only关键字，移动设备的Web浏览器会忽略only关键字并直接根据后面的表达式应用样式文件。对于不支持Media Queries的设备但能够读取Media Type类型的Web浏览器，遇到only关键字时会忽略这个样式文件。
	all: 所有设备，这个应该经常看到。