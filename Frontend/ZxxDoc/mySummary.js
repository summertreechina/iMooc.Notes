>>> 自己的总结
	1. 尽量少用margin。因为margin会牵扯到莫名其妙的合并问题，且在页面上不容易看出来。
	2. 尽量用padding，各个元素各自在各自的院子里活动互不干扰。
	3. 尽量少用float，太难以捉摸。
	4. 父元素内的所有子元素浮动了，父元素就会塌缩，塌缩至一个合适的值
	5. 'background-attachment: fixed;' 。让网页背景图片固定，不随页面滚动，可以营造非常时尚的效果。


>>> 各处获取的知识
	1. inline-block 元素之间水平距离上有竖缝，原因是编辑器里的换行符。
	2. 为什么有的时候用a标签去模拟button呢？因为button的padding计算规则各个浏览器不统一，展示效果不一样。
	3. 但是，在表单当中，离不开button触发提交事件，需要做兼容性处理。'http://www.imooc.com/video/12599'