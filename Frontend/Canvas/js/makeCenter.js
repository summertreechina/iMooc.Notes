+function(){
	'use strict';

	let MakeCenter = function(settings, dom) {
		let self = this;
		self.dom = dom;
		self.parent = dom.parent();
		self.parent.css('position', 'relative');

		self.offsetPosition = function() {
			let topVal = (window.innerHeight - self.dom.height())/2;
			topVal = (topVal > 0) ? topVal : 0;
			self.dom.css({
				background: '#b5b5b5',
				position: 'relative',
				top : topVal
			});
		}
		self.offsetPosition();

		window.onresize = function(event) {
			self.offsetPosition();
		};

		if (Object.keys(settings).length != 0) {
			self.dom.offset({
				top  : settings.offsetY,
				left : settings.offsetX
			});
		}
	};

	$.fn.extend({
		makeCenter : function() {
			new MakeCenter(settings, this);
		}
	});
}();