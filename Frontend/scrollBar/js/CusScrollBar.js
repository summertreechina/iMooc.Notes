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
				scrollDir     : "y",
				contSelector  : "",
				barSelector   : "",
				sliderSelector: ""
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
			this.$doc = $(doc);

			this._initSilderDragEvent();
		},
		// 
		_initSilderDragEvent : function() {
			let slider = this.$slider;
			let sliderEl = slider[0];

			if (sliderEl) {
				let doc = this.$doc;
				let dragStartPagePosition;
				let dragStartScrollPosition;
				let dragContBarRate;

				slider.on('mousedown', function(e) {
					e.preventDefault();
					console.log('mousedown')
					// 学了一招 命名空间
					doc.on('mousemove.nnHoney', function(ev) {
						ev.preventDefault();
						console.log('mousemove')
					}).on('mouseup.nnHoney', function(event) {
						event.preventDefault();
						console.log('mouseup')
						// doc.off("mousemove mouseup");
						doc.off(".nnHoney");
					});;
				});

			}
		}

	});
	
	// CusScrollBar.prototype._init = function() {
	// }

	win.CusScrollBar = CusScrollBar;

})(window, document, jQuery);