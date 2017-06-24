let loopPlayInit = 
(function(){
	'use strict';

	let $mainBox  = $('.mainBox');
	let $leftBtn  = null;
	let $rightBtn = null;
	let $playBtn  = null;
	let $imgList  = null;
	let origin = ['125px', '800px'];
	let imgArr = [
		[],
		[],
		[],
	];

	function init() {
		$leftBtn  = $('.left-btn');
		$rightBtn = $('.right-btn');
		$playBtn  = $('.play-btn');
		$imgList  = $('.mainBox ul li');

		configer();
		setEvent();
	}

	function configer() {
		let ang = 10;
		let aInit = -15;
		$imgList.animate({origin: '125px'}, 1200)
		$imgList.each(function(id, el) {
			$(el).animate({ rotate: aInit + (ang*id) + "deg"});
		});
	}
	function setEvent() {
		// $mainBox.onclick();
		let mainBox = document.querySelector('.mainBox');
		mainBox.onclick = function(e) {
			let $target = $(e.target);
			if ($target[0] == $leftBtn[0]) {
				anigo(-1);
			}
			if ($target[0] == $rightBtn[0]) {
				anigo(1);
			}
			if ($target[0] == $playBtn[0]) {

			}
		}
	}
	function anigo() {

	}
	function creatImage(arr) {
		return imgObjs;
	}



	return init;





})();

loopPlayInit();