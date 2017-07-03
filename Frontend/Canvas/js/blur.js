-function(){
	'use strict';

	let imgW = $('#blur-div').width();
	let imgH = $('#blur-div').height();

	let canvas = document.querySelector('#canvas');
	let context = canvas.getContext('2d');


	canvas.width = imgW;
	canvas.height = imgH;

	let img = new Image();
	let clippingRegion = { r:80 };
	let timer = null;
	img.src = "../images/e0f39278-f0f3-4e85-8eab-69ab725ac73d.jpg";
	img.onload = function(e) {
		initCanvas();
		triggerEvent();
	}

	function initCanvas() {
		clippingRegion = {
			x : (Math.random()*(imgW - 2*clippingRegion.r)) + clippingRegion.r,
			y : (Math.random()*(imgH - 2*clippingRegion.r)) + clippingRegion.r,
			r : 80
		};
		draw(img, clippingRegion);
	}

	function draw(img, clippingRegion) {
		context.clearRect(0, 0, canvas.width, canvas.height);

		context.save();	// save()和restore()存储|释放canvas的状态
		setClippingRegion(clippingRegion);
		context.drawImage(img, 0, 0);
		context.restore();
	}

	function setClippingRegion(clippingRegion) {
		context.beginPath();
		context.arc(clippingRegion.x, clippingRegion.y, clippingRegion.r, 0, 2*Math.PI, false);
		context.clip();
		// 由此生成一个剪辑区域，后续画图只能在剪辑区域进行
		// context.closePath();
	}

	function triggerEvent() {
		$('#blur-div').on('click', ".button", function(e) {
			e.preventDefault();
			if (this.id == 'reset-button') {
				reset();
			}
			if (this.id == 'show-button') {
				show();
			}
			if (this.id == 'auto-button') {
				// $(this).remove();
				auto();
			}
		});
	}

	function reset() {
		clearInterval(timer);
		initCanvas();
	}

	function show() {
		clearInterval(timer);
		clippingRegion = { x:imgW/2, y:imgH/2, r:0 };
		timer = setInterval(function(){
			clippingRegion.r += 2;
			draw(img, clippingRegion);
			if (clippingRegion.r > 1000) {
				clearInterval(timer);
			}
		}, 30);
	}

	function auto() {
		clearInterval(timer);
		timer = setInterval(function(){
			initCanvas();
		}, 1000);
	}
	
}();