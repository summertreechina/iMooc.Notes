+function(){
	'user strcit';

	makeCenter();

	closeBtn();

	function makeCenter() {
		let dom = $('#siginBox');
		let offsetTop = ($(window).height() - dom.height()) / 4;

		dom.css('margin-top', offsetTop + 'px');
	};

	function closeBtn() {
		$('#siginBox .close-btn').on('click', function(){
			$('#siginBox').hide();
			$('#footer').addClass('animated fadeOut');
		});
	};

	$('.js-link-effect').on('mouseover', function(e) {
		e.preventDefault();
		let linkEl = $(this);
		linkEl.addClass('animated swing');
		setTimeout(function(){
			linkEl.removeClass('animated swing');
		}, 1500);
	});

}();