>>> 第一种实现方式
----心得
	1. jQuery竟然可以 在一个'数组对象'上绑定事件，绑定事件后竟然可以直接得到被点击元素属于数组中的第几位。汗，我差点写一个函数去求元素在数组中的位置。
	在一个'数组对象'上绑定事件，其实是在每一个元素上绑定了对象。

	$(array).on('click', function(event) {
		event.preventDefault();
		console.log('第'+$(this).index()+'个元素被点击了' );
	});

	2. jQuery 一个元素绑定多个事件有两种写法 又学了一招。
	第一种 可读性不是太好
	$lists.on('mouseover', function(e) {
		n = $(this).index();
		int(n);
	}).on('click', function(e){
		e.preventDefault();
		num = $(this).index();
	});

	第二种
	$lists.on({
		'mouseover': function(e) {...},
		'click': function(e) {...},
		'mouseout': function(e) {...}
	});

这就是今天的收获 
