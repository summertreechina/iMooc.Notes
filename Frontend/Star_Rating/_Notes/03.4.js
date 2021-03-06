>>> 第一种实现方式
----心得
	1. 在一个'数组对象'上绑定事件，其实是在每一个元素上绑定了对象。坏处是页面将存在多个事件监听对象，造成资源浪费。所以需要事件委托，把事件绑定到父元素上，书写格式如下：



	2. jQuery 事件委托的写法
	$rating.on({
		'mouseover' : function(e) {
			e.preventDefault();
			var i = $(this).index();
			init(i);
		},
		'click' : function(e) {
			var i = $(this).index();
			num = i;
		},
		'mouseout' : function(e) {
			init(num);
		}
	}, '.rating-item');
	注意：'.rating-item'的位置只能是选择器，不能是变量，否则无法运行。

