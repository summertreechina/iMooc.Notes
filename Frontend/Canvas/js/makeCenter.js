+function(){
	'use strict';

	function makeCenter() {
		alert('')
	};
	makeCenter.prototype = {
		init : function() {

		},
	};

	$.fn.extend({
		makeCenter : makeCenter
	});
}();