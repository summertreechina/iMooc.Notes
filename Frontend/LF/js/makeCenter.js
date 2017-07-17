+function(){
	'use strict';

	let MakeCenter = function(dom) {
		let self = this;
		self.dom = dom;
		self.parent = dom.parent();
		self.parent.css('position', 'relative');

		self.offsetPosition = function() {
			let topVal = ($(window).height() - self.dom.height())/2;
			topVal = (topVal > 0) ? topVal : 0;
			self.dom.css({
				background: '#eee',
				position: 'relative',
				top : topVal - 50
			});
		}
		self.offsetPosition();

		window.onresize = function(event) {
			self.offsetPosition();
		};
	};

	$.fn.extend({
		makeCenter : function() {
			new MakeCenter(this);
		}
	});
}();