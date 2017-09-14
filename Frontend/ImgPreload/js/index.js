(function($){
	'use strict'

	var imgs = [
		'https://photo.tuchong.com/427043/f/18514561.jpg',
		'https://photo.tuchong.com/427043/f/18514562.jpg',
		'https://photo.tuchong.com/427043/f/18514563.jpg',
		'https://photo.tuchong.com/427043/f/18514564.jpg',
		'https://photo.tuchong.com/427043/f/18514565.jpg',
		'https://photo.tuchong.com/427043/f/18514566.jpg',
		'https://photo.tuchong.com/1071722/f/16732104.jpg',
		'https://photo.tuchong.com/1071722/f/16732115.jpg',
		'https://photo.tuchong.com/1071722/f/16732113.jpg',
		'https://photo.tuchong.com/1052882/f/15887799.jpg',
		'https://photo.tuchong.com/1052882/f/15887990.jpg',
		'https://photo.tuchong.com/1052882/f/15887800.jpg',
		'https://photo.tuchong.com/1052882/f/15887804.jpg',
		'https://photo.tuchong.com/1285120/f/28057169.jpg',
		'https://photo.tuchong.com/1285120/f/28057171.jpg',
		'https://photo.tuchong.com/1285120/f/28057173.jpg',
		'https://photo.tuchong.com/1285120/f/28057174.jpg',
		'https://photo.tuchong.com/1285120/f/28057175.jpg'
	];

	var len           = imgs.length;
	var index         = 0;
	var $btn          = $('.btn');
	var $img          = $('#img');
	var $loading_mask = $('#loading-mask');
	var $progress_bar = $('.progress-bar');
	var count         = 0;

	$.each(imgs, function(index, src) {
		// index不能在这里用 有时index莫名其妙的不按照顺序执行
		var imgObj = new Image();
		imgObj.src = src;

		$(imgObj).on('load error', function(event) {
			// 
			var ratio = ((count+1) / len) * 100;
			$progress_bar.attr({
					'style'         : 'width:'+ratio+'%',
					'aria-valuenow' : ratio
			});
			// 
			if ((count+1) >= len) {
				$loading_mask.hide();
			}
			// 
			count++;
		});
	});

	$btn.on('click', function(e) {
		e.preventDefault();

		if ($(this).data('control') === 'prev') {
			--index;
			index = Math.max(0, index);
		} else {
			++index;
			index = Math.min((len-1), index);
		}
		document.title = '第' +(index+1)+ '张/共' +len+ '张';
		$img.attr('src', imgs[index]);
		// console.log(index);
	});
})(jQuery);