+function(){
	'use strict';

	let MakeCenter = function(settings, dom) {
		let self = this;
		self.dom = dom;
		self.parent = dom.parent();


		let topVal = (window.innerHeight - self.dom.height())/2;
		topVal = (topVal > 0) ? topVal : 0;

		self.parent.css('position', 'relative');
		self.dom.css({
			background: '#b5b5b5',
			position: 'relative',
			top : topVal
		});

		window.onresize = function(event) {
			let topVal = (window.innerHeight - self.dom.height())/2;
			self.dom.css({
				background: '#b5b5b5',
				position: 'relative',
				top : topVal
			});
		};



	};
	MakeCenter.prototype = {
		init : function() {

		},
	};

	$.fn.extend({
		makeCenter : function() {
			// console.info(this)
			new MakeCenter(settings, this);
		}
	});
}();