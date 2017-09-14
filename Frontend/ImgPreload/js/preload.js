(function($){
	'use strict';

	// 构造函数
	function Preload(imgs, options) {
		this.imgs       = (typeof imgs === 'string') ? [imgs] : imgs;
		this.opts       = $.extend({}, this.DEFAULTS, options);
		
		if (this.opts.order == 'unordered') {
			this._unordered();
		} else if (this.opts.order == 'ordered') {
			this._ordered();
		}
		  // 无序预加载
	}

	Preload.DEFAULTS = {
		order	  : 'unordered',
		every_once: null,	// 每加载完一张 干什么
		all       : null	// 所有都加载完 干什么
	};

	// Preload.prototype._unordered = function() {}
	Preload.prototype = {
		_unordered : function() {
			var imgs  = this.imgs;
			var len   = this.imgs.length;
			var opts  = this.opts;
			var count = 0;
			var ratio = 0;
			// console.log(imgs, len, opts, count, ratio)

			$.each(imgs, function(i, src) {
				if (typeof src !== 'string') return;

				var imgObj = new Image();
				imgObj.src = src;

				$(imgObj).on('load error', function(e) {
					count++;
					ratio = count / len;
					opts.every_once && opts.every_once(ratio);

					if ((count+1) >= len) {
						opts.all && opts.all();
					}
				});
				// console.log(count)
			});
		},
		_ordered : function() {
			let imgs = this.imgs;
			let len = imgs.length;
			let i = 0;

			let imgObj = new Image();
			imgObj.src = imgs[i];

			$(imgObj).on('load error', function() {
				if (i < len) {
					this._ordered();
				}
				i++;
			});
		}
	}

	// $.fn.extend.prototype.preload = function(imgs, options) {} 错误
	$.extend({
		preload : function(imgs, options) {
			new Preload(imgs, options);
		}
	})
	

})(jQuery);