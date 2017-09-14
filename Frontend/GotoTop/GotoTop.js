window.onload = function () {

	// 获取滚动条距离顶部的高度  '||document.body.scrollTop'在标准w3c下，document.body.scrollTop恒为0
	// var disTop  = document.documentElement.scrollTop;
	
	// 根据页面高度控制返回顶部按钮的显示
	$(window).on('scroll', function(){
		var viewAreaHeight = $(window).height();
		var disTop = $('body').scrollTop();
		if ( disTop < viewAreaHeight ) {
			$('#backTop').css({"display" : "none"});
			$('#js-elevator-weixin').addClass('no-goto');
		} else {
			$('#backTop').css({"display" : "block"});
			$('#js-elevator-weixin').removeClass('no-goto');
		};
	});
	
	// **第一种解决方案 根据慕课网教程改写http://www.imooc.com/video/889
	$('#backTop').on('click', function(e){
		e.stopPropagation();
		var timer   = null;
		var isBreak = false;
		// 设置定时器
		timer = setInterval(function(){
			var disTop = $('body').scrollTop();
			var iSpeed = Math.floor( -disTop/8 );
			$('html, body').scrollTop(disTop + iSpeed);	

			// 点击终止
			$(window).on('click', function(){
				isBreak = true;
			});
			if (disTop == 0 || isBreak) {
				clearInterval(timer);
			};
			// 恢复初始状态 为下一次gotoTop做准备
			isBreak = false;
		}, 30);
	});


	// **第二种简单的方案 
	var speed = 800;
	// 回到顶部
	$('#toTop_simple').on('click', function(){
		$('html, body').animate({
	    	scrollTop: '0px'
		}, speed);
	});
};