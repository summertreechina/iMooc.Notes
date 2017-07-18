+function(){
	'user strcit';

	makeCenter();


	function makeCenter() {
		let dom = $('#siginBox');
		let offsetTop = ($(window).height() - dom.height()) / 4;
		dom.css('margin-top', offsetTop + 'px');
	}

}();