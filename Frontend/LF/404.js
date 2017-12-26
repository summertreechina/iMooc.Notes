+function(){
	'user strcit';

	makeCenter();
	tellMeShow();


	function makeCenter() {
		let dom = $('.col-sm-4.col-sm-offset-4');
		let offsetTop = ($(window).height() - dom.height()) / 4;
		dom.css('margin-top', offsetTop + 'px');
	}

	function tellMeShow() {
		$('#urgency').on({
			'mouseover' : function() {
				let fe = $(this).find('span')[0];
				let se = $(this).find('span')[1];
				$(fe).hide();
				se.style.display = 'inline-block';
			},
			'mouseleave' : function() {
				let fe = $(this).find('span')[0];
				let se = $(this).find('span')[1];
				$(fe).fadeIn();
				$(se).hide();
			}
		})
	}
}();