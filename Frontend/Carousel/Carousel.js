;(function($){
	var Carousel = function (poster) {
		var self = this;

		// 保存单个旋转木马对象
		this.poster = poster;
		// 广告展现区域
		this.posterArea = poster.find('ul.poster-list'); 
		this.leftBtn    = poster.find('.poster-btn-left');
		this.rightBtn   = poster.find('.poster-btn-right');
		this.posterItems= this.posterArea.find('li.poster-item');
		if (this.posterItems.length%2==0) {
			this.posterArea.append(this.posterItems.eq(0).clone());
			this.posterItems = this.posterArea.children();
		}
		this.firstItem  = this.posterItems.first();
		this.lastItem   = this.posterItems.last();
		this.rotateFlag = true;

		// 默认的配置参数
		this.setting = {
			"width"        : 1200,			// 幻灯片的高度
			"height"       : 400,			// 幻灯片的宽度
			"picWidth"     : 800,			// 幻灯片第一帧的宽度
			"picHeight"    : 400,			// 幻灯片第一帧的高度
			"scale"        : 0.9,			// 渐次缩放比例
			"verticalAlign": "middle",		// 对齐方式 top bottom
			"speed"        : 500,			// 切换速度
			"autoPlay"     : true,			// 是否自动播放
			"delay"		   : 2000           // 延迟时间
		};
		$.extend(this.setting, this.getSetting());
		// 根据配置参数去控制页面显示
		this.setSettingValue ();
		this.setPosterPos ();

		this.leftBtn.on('click', function(e){
			e.stopPropagation();
			if (self.rotateFlag) {
				self.rotateFlag = false;
				self.carouselRotate('left');
			}
		});
		this.rightBtn.on('click', function(e){
			e.stopPropagation();
			if (self.rotateFlag) {
				self.rotateFlag = false;
				self.carouselRotate('right');
			}
		});
			// this.carouselRotate(1); 点击之后不能执行 因为此this这时等同于上一行this 而它没有carouselRotate()方法
			// 因此在类的第一行增加了 var self = this;
		// 自动播放
		if (this.setting.autoPlay) {
			this.autoPlay();
			this.posterArea.on({
				mouseover : function () { window.clearInterval(self.timer); },
				mouseout  : function () { self.autoPlay(); }
			});
		}

	};
	Carousel.prototype = {

		// 自动播放
		autoPlay : function () {
			var self = this;
			this.timer = window.setInterval(function(){
				// this.leftBtn.click();
				self.rightBtn.click();
			}, this.setting.delay);
		},

		// 旋转控制
		carouselRotate : function (dir) {
			var _this     = this;
			var zIndexArr = [];
			if (dir == 'left') {
				this.posterItems.each(function(i, element){
					var next   = $(element).next().get(0) ? $(element).next() : _this.firstItem;
					var width  = $(next).width();
					var height = $(next).height();
					var zIndex = $(next).css('zIndex');
					var left   = $(next).css('left');
					var top    = $(next).css('top');
					zIndexArr.push(zIndex);
					$(element).animate({
						width  : width,
						height : height,
						left   : left,
						top    : top
					},_this.setting.speed, function(){
						_this.rotateFlag = true;
					});
				});
				this.posterItems.each(function(i, element){
					$(element).css("zIndex", zIndexArr[i]);
				});
			} else {
				this.posterItems.each(function(i, element){
					var prev   = $(element).prev().get(0) ? $(element).prev() : _this.lastItem;
					var width  = $(prev).width();
					var height = $(prev).height();
					var zIndex = $(prev).css('zIndex');
					var left   = $(prev).css('left');
					var top    = $(prev).css('top');
					zIndexArr.push(zIndex);
					$(element).animate({
						width  : width,
						height : height,
						left   : left,
						top    : top
					},_this.setting.speed, function(){
						_this.rotateFlag = true;
					});
				});
				this.posterItems.each(function(i, element){
					$(element).css("zIndex", zIndexArr[i]);
				});
			}
		},

		// 设置剩余帧的位置关系
		setPosterPos : function () {
			var self       = this;
			var sliceItems = this.posterItems.slice(1);
			var sliceNum   = sliceItems.length/2;
			var sliceRight = sliceItems.slice(0, sliceNum);
			var levelR     = Math.floor(this.posterItems.length/2);
			var RW         = this.setting.picWidth;
			var RH         = this.setting.picHeight;
			var OP         = this.setting.scale;
			var gap        = ((this.setting.width - this.setting.picWidth)/2)/levelR;
			var firstLeft  = (this.setting.width - this.setting.picWidth)/2;
			var fixOffsetLeft= firstLeft + RW;

			// 设置右边帧的位置关系
			sliceRight.each(function(i,element){
				var j = i;
				levelR--;
				RW 	= RW * self.setting.scale;
				RH 	= RH * self.setting.scale;
				OP  = OP * self.setting.scale;
				$(element).css({
					zIndex : levelR,
					width  : RW,
					height : RH,
					left   : fixOffsetLeft + (++i) * gap - RW,
					top    : self.setVertucalAlign(RH)
				});
			});
			// 设置左边的位置关系
			var sliceLeft= sliceItems.slice(sliceNum);
			var LW    = sliceRight.last().width();
			var LH    = sliceRight.last().height();
			var levelL= Math.floor(this.posterItems.length/2);

			sliceLeft.each(function(i, element){
				$(element).css({
					zIndex : i,
					width  : LW,
					height : LH,
					left   : i * gap,
					top    : self.setVertucalAlign(LH)
				});
				LW = LW / self.setting.scale;
				LH = LH / self.setting.scale;
				// levelL--;
			});
		},

		// 设置对齐方式
		setVertucalAlign : function (height) {
			var top;	// CSS样式中的top值
			var align = this.setting.verticalAlign;
			switch (align) {
				case "middle" :
					top = (this.setting.height - height)/2;
					break;
				case "top" :
					top = 0;
					break;
				case "bottom" :
					top = this.setting.height - height;
					break;
				default :
					top = (this.setting.height - height)/2;
			}
			return top;
		},

		// 根据设置值控制页面的显示
		setSettingValue : function () {
			this.poster.css({
				width  : this.setting.width,
				height : this.setting.height
			});
			this.posterArea.css({
				width  : this.setting.width,
				height : this.setting.height
			});
			var W = (this.setting.width - this.setting.picWidth)/2;
			this.leftBtn.css({
				width : W,
				height: this.setting.height,
				zIndex: Math.ceil(this.posterItems.length)
			});
			this.rightBtn.css({
				width : W,
				height: this.setting.height,
				zIndex: Math.ceil(this.posterItems.length)
			});
			this.firstItem.css({
				left  : W,
				width : this.setting.picWidth,
				height: this.setting.picHeight,
				zIndex: Math.floor(this.posterItems.length/2)
			});
		},

		// 获取人工配制参数
		getSetting : function () {
			var setting = this.poster.attr("data-setting");
			if (setting && setting!="") {
				return JSON.parse(setting);
			} else {
				return {};
			}
		}
	}

	// 
	Carousel.init = function (posters) {
		posters.each(function(i,element){
			new Carousel($(element));
		}) 
	}
	window['carousel'] = Carousel;

})(jQuery);