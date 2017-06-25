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
		['./images/1/1273111319680123879.jpg', './images/1/1564156445598718097.jpg', './images/1/27584547735220719.jpg', './images/1/731271989594446829.jpg'],
		['./images/2/IMG_3499.JPG', './images/2/IMG_3639.JPG', './images/2/IMG_3645.JPG', './images/2/mmexport1438439699817.jpg'],
		['./images/3/IMG_2876.JPG', './images/3/IMG_2877.JPG', './images/3/IMG_2879.JPG', './images/3/IMG_2888.JPG']
	];
	let imgGroupId = 0;
	let imgAng = 45;

	imgArr = creatImage(imgArr);


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
		$imgList.animate({origin: '125px'})
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

	function anigo(d) {
		imgGroupId += d;
		$imgList.each(function(i, el) {
			let $currImg = $(el).children('img');
			let $newImg = $(imgArr[imgGroupId][i]);
			$(el).empty().append($newImg);
			$(el).animate({ origin: '80' });
			$(el).animate({ origin: '80', rotate: (0-d)*imgAng + 'deg' });
		});
	}
	function creatImage(arr) {
		let imgArr = [];
		// 学了一招 循环
		for(let i in arr) {
			imgArr[i] = [];
			for(let k in arr[i]) {
				imgArr[i][k] = new Image();
				imgArr[i][k].src = arr[i][k];
			}
		}

		return imgArr;
	}



	return init;





})();

loopPlayInit();