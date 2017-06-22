// !function(){}() 自调用匿名函数
// (function(){})
(function(win, doc, $){
	'use strict';
	// 构造函数
	function CusScrollBar(options) {
		this._init(options);
	}

	$.extend(CusScrollBar.prototype, {
		_init : function(options) {
			let self = this;
			self.options = {
				scrollDir      : "y",
				contSelector   : "",
				barSelector    : "",
				sliderSelector : "",
				wheelStep      : 10,		// 滚轮步长
				tabItemSelector: ".tab-item",
				tabActiveClass : "tab-active",
				anchorSelector : ".anchor"		// 锚点选择器
			};
			$.extend(true, self.options, options || {});

			self._initDomEvent();

			return self;
		},
		// 
		_initDomEvent : function() {
			let opts     = this.options;
			this.$cont   = $(opts.contSelector);
			this.$slider = $(opts.sliderSelector);
			this.$bar    = opts.barSelector ? $(opts.barSelector) : self.$slider.parent();
			this.$tabItem = $(opts.tabItemSelector);
			this.$anchor = $(opts.anchorSelector);
			this.$doc    = $(doc);

			this._initSilderDragEvent()
				._initTabEvent()
				._bindContScroll()
				._bindMousewheel();
		},
		// 
		_initSilderDragEvent : function() {
			let self = this;
			let slider = this.$slider;
			let sliderEl = slider[0];

			if (sliderEl) {
				let doc = self.$doc;
				let dragStartPagePosition;
				let dragStartScrollPosition;
				let dragContBarRate;

				function mousemoveHandler(e) {
					e.preventDefault();
					console.log('mousemove')
					if (dragStartPagePosition == null) {
						return;
					}
					self.scrollTo(dragStartScrollPosition + (e.pageY - dragStartPagePosition) * dragContBarRate);
				};

				slider.on('mousedown', function(e) {
					e.preventDefault();
					console.log('mousedown')
					dragStartPagePosition = e.pageY;
					dragStartScrollPosition = self.$cont[0].scrollTop;
					dragContBarRate = self.getMaxScrollPosition() / self.getMaxSliderPosition();
					console.log(dragContBarRate)
					// 学了一招 命名空间
					doc.on('mousemove.nnHoney', mousemoveHandler).on('mouseup.nnHoney', function(event) {
						event.preventDefault();
						console.log('mouseup')
						// doc.off("mousemove mouseup");
						doc.off(".nnHoney");
					});;
				});
			}
			return self;
		},
		getMaxScrollPosition : function() {
			let self = this;
			// 内容可以滚动的高度
			// self.$cont.height() 内容可视区域的高度(文章未充满页面的情况)
			// self.$cont[0].scrollHeight 内容完整高度(文章超出页面包括隐藏部分)
			return Math.max(self.$cont.height(), self.$cont[0].scrollHeight) - self.$cont.height();
		},
		getMaxSliderPosition : function() {
			let self = this;
			return self.$bar.height() - self.$slider.height();
		},
		scrollTo : function(postionVal) {
			let self = this;
			self.$cont.scrollTop(postionVal)
		},
		_bindContScroll : function() {
			let self = this;
			self.$cont.on("scroll", function(e) {
				e.preventDefault();
				let sliderEl = self.$slider && self.$slider[0];
				if (sliderEl) {
					sliderEl.style.top = self.getSliderPosition() + 'px';
				}
			});
			return self;
		},
		getSliderPosition : function() {
			let self = this;
			let maxSliderPosition = self.getMaxSliderPosition();
			return Math.min(maxSliderPosition, maxSliderPosition * self.$cont[0].scrollTop /
                self.getMaxScrollPosition());
		},
		_bindMousewheel : function() {
			let self = this;

			self.$cont.on("mousewheel DOMMouseScroll", function(e){
				e.preventDefault();
				let oEv = e.originalEvent;
				let wheelRange = oEv.wheelDelta ? -oEv.wheelDelta/120 : (oEv.detail || 0) / 3;
				self.scrollTo(self.$cont[0].scrollTop + wheelRange * self.options.wheelStep);
			});

			return self;
		},
		_initTabEvent : function() {
			let self = this;

			self.$tabItem.on('click', function(e) {
				e.preventDefault();
				// 学了一招
				let index = $(this).index();
				self.changeTabSelect(index);
				self.scrollTo(self.$cont[0].scrollTop + self.getAnchorPosition(index));
			});

			return self;
		},
		changeTabSelect : function(index) {
			let self = this;
			let active = self.options.tabActiveClass;
			// 学了一招 
			return self.$tabItem.eq(index).addClass(active).siblings().removeClass(active);
		},
		getAnchorPosition : function(index) {
			// 学了一招 竟然还可以这么用
			// position() 获取匹配元素中第一个元素的当前坐标，相对于最近的一个被定位(relative, absolute, fixed)过的父元素
			return this.$anchor.eq(index).position().top;
		}

	});
	
	// CusScrollBar.prototype._init = function() {
	// }

	win.CusScrollBar = CusScrollBar;

})(window, document, jQuery);