;(function($, win, doc, undefined){
	'use strict';

	// 
	canvas_zoom_tool ();
	// 
	canvas_base_knowledge();
	// 
	watermark_canvas();
	// 放大镜效果
	tMagnify_canvas();

/**
 * [tMagnify_canvas description]
 * @return {[type]} [description]
 */
function tMagnify_canvas() {
	// 
	var ts_canvas = doc.querySelector('#TMagnify-Canvas-small');
	var ts_context = ts_canvas.getContext('2d');
	// 
	var tl_canvas = doc.querySelector('#TMagnify-Canvas-large');
	var tl_context = tl_canvas.getContext('2d');
	// 
	var scale = 8;
	var R = 200;
	// 
	var isMouseDown = false;

	// 
	var image = new Image();
	var imageW;
	var imageH;
	image.src = './IMG/1.jpg';

	image.onload = function() {
		// 
		imageW = image.width;
		imageH = image.height;
		// 
		ts_canvas.width = imageW/8;
		ts_canvas.height = imageH/8;
		// 
		ts_context.drawImage(image, 0,0,imageW,imageH, 0,0,ts_canvas.width,ts_canvas.height);

		// 
		tl_canvas.width = imageW;
		tl_canvas.height = imageH;
		tl_context.drawImage(image, 0,0);
	}


	ts_canvas.onmousedown = function(e) {
		e.preventDefault();
		isMouseDown = true;

		var point = windowToCanvas(e.clientX, e.clientY);

		drawCanvasWithMagnifier(true, point);

	};
	ts_canvas.onmousemove = function(e) {
		e.preventDefault();
		if (isMouseDown == true) {
			var point = windowToCanvas(e.clientX, e.clientY);

			drawCanvasWithMagnifier(true, point)
		}

	}
	ts_canvas.onmouseup = function(e) {
		e.preventDefault();
		isMouseDown = false;

		drawCanvasWithMagnifier(false)

	}
	ts_canvas.onmouseout = function(e) {
		e.preventDefault();
		isMouseDown = false;

		drawCanvasWithMagnifier(false)
	
	}
	// 
	function windowToCanvas(x, y) {

		var bbox = ts_canvas.getBoundingClientRect();

		return { x : x-bbox.left, y : y-bbox.top };
	}
	// 
	function drawCanvasWithMagnifier(isShowMagnifier, point) {
		ts_context.clearRect(0,0, ts_canvas.width, ts_canvas.height);
		ts_context.drawImage(image, 0,0,imageW,imageH, 0,0,ts_canvas.width,ts_canvas.height);

		if ( isShowMagnifier == true ) {
			drawMagnifier( point );
		}
	}
	// 
	function drawMagnifier( point ) {
		var sx = point.x*8 - R;
		var sy = point.y*8 - R;
		var dx = point.x - R;
		var dy = point.y - R;

		ts_context.save();

		ts_context.lineWidth = 10.0;
		ts_context.strokeStyle = '#069';

		ts_context.beginPath();
		ts_context.arc( point.x, point.y, R, 0, Math.PI*2 );
		ts_context.stroke();

		ts_context.clip();

		ts_context.drawImage( tl_canvas, sx,sy,2*R,2*R, dx,dy,2*R,2*R );
		ts_context.restore();
	}
}



function watermark_canvas() {
	/*写字*/
	var font_canvas = doc.querySelector('#font-canvas');
	var font_centext = font_canvas.getContext('2d');
	font_canvas.width = 150;
	font_canvas.height = 60;

	font_centext.font = "blod 80px Arial";
	font_centext.fillStyle = "rgba(85,255,55,.5)";
	font_centext.textBaseline = "middle";
	font_centext.fillText("www.ls.cc", 40, 30);

	/*底图*/
	var bottomPic_canvas = doc.querySelector('#bottom-picture');
	var bottomPic_context = bottomPic_canvas.getContext('2d');
		bottomPic_canvas.width = 800;
		bottomPic_canvas.height = 800;

	var bottomPic = new Image();
	bottomPic.src = './IMG/4.jpg';

	bottomPic.onload = function() {
		bottomPic_canvas.width = bottomPic.width/2;
		bottomPic_canvas.height = bottomPic.height/2;

		bottomPic_context.drawImage(bottomPic, 0, 0, bottomPic.width, bottomPic.height, 0, 0, bottomPic_canvas.width, bottomPic_canvas.height);
		/*印 文字水印*/
		bottomPic_context.drawImage(font_canvas,  bottomPic_canvas.width - font_canvas.width, bottomPic_canvas.height - font_canvas.height);
	}

	/*水印图*/
	var watermark_canvas = doc.querySelector('#watermark-picture');
	var watermark_context = watermark_canvas.getContext('2d');
		watermark_canvas.width = 400;
		watermark_canvas.height = 400;

	var watermarkPic = new Image();
	watermarkPic.src = './IMG/5.jpg';

	watermarkPic.onload = function() {
		watermark_canvas.width = watermarkPic.width/4;
		watermark_canvas.height = watermarkPic.height/4;

		watermark_context.drawImage(watermarkPic, 0, 0, watermarkPic.width, watermarkPic.height, 0, 0, watermark_canvas.width, watermark_canvas.height);
		/*印 文字水印*/
		watermark_context.drawImage(font_canvas,  watermark_canvas.width - font_canvas.width, watermark_canvas.height - font_canvas.height);

	}
 
}
	

function canvas_zoom_tool() {
	// 
	var canvas = doc.querySelector('#canvas_zoom_tool');
	var context = canvas.getContext('2d');

	// 声明滑杆
	var $slider = $('#scale-range');
	// 创建一个图像实例
	var image = new Image();
	image.src = './IMG/1.jpg';

	image.onload = function() {
		// 设置画布的长宽
		canvas.width = image.width/7;
		canvas.height = image.height/7;

		// 设置滑动杆的长度 
		$slider.width(canvas.width*1.1);

		var scale = $slider.val();
		var imageWidth = image.width*scale;
		var imageHeight = image.height*scale;
		var dx = canvas.width/2 - imageWidth/2;
		var dy = canvas.height/2 - imageHeight/2;
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.drawImage(image, dx, dy, imageWidth, imageHeight);

		// 绑定滑杆
		$slider.on('mousemove', function() {
			scale = $slider.val();
			drawImageByScale(scale);
			// console.log(scale);
		})

		// 绑定画布 拖动事件
		$(canvas).on('mousedown', function(e){
			e.preventDefault();
			var _oriX = e.clientX;
			var _oriY = e.clientY;
			console.log(_oriX, _oriY)

			$(this).on('mousemove', function(event){
				event.preventDefault();
				var disX = event.clientX - _oriX;
				var disY = event.clientY - _oriY;

				drawImageByDrag(disX, disY);
			});
			$(doc).on('mouseup', function(){
				$(canvas).off('mousemove');
				_oriX = _oriY = null;
			})
		});



		function drawImageByDrag(disX, disY) {
			scale = $slider.val();

			var imageWidth = image.width*scale;
			var imageHeight = image.height*scale;
			var dx = dx = canvas.width/2 - imageWidth/2 + disX;
			var dy = canvas.height/2 - imageHeight/2 + disY;

			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(image, dx, dy, imageWidth, imageHeight);
		}


		function drawImageByScale() {
			scale = $slider.val();

			var imageWidth = image.width*scale;
			var imageHeight = image.height*scale;
			var dx = canvas.width/2 - imageWidth/2;
			var dy = canvas.height/2 - imageHeight/2;

			context.clearRect(0, 0, canvas.width, canvas.height);
			context.drawImage(image, dx, dy, imageWidth, imageHeight);
		}


		// 在画布上绘制图像笔记 好像太笨了
		// context.drawImage(image, 0, 0, canvas.width, canvas.height);
		// drawImageByScale(scale, canvas, context, image);

		// var sx = (image.width*scale/5 - canvas.width)/2;
		// var sy = (image.height*scale/5 - canvas.height)/2;
		// var sw = image.width/scale;
		// var sh = image.height/scale;
		// context.drawImage(image, sx, sy, sw, sh, 0, 0, canvas.width, canvas.height);
		
	}
}




/**
 * Canvas基础知识
 * @return {[type]} [description]
 */
function canvas_base_knowledge() {
	// canvas.width = 1152;
	// canvas.height= 768;

	/*绘制正方形*/
	// context.fillStyle = 'green';
	// context.fillRect(100, 100, 400, 400);


	/*创建一个图像对象*/
	var image   = new Image();

	/*图像处理*/
	image.src = './IMG/2.jpg';
	image.onload = function() {

		var imageWidth = image.width;
		var imageHeight = image.height;

		var canvas  = doc.querySelector('#canvas_knowledge');
		var context = canvas.getContext('2d');

		canvas.width = image.width/2;
		canvas.height= image.height/2;

		// context.drawImage(image, dx, dy) | 参数 图片对象 绘制x坐标 绘制y坐标
		// context.drawImage(image, 0, 0);

		// context.drawImage(image, dx, dy) | 参数 图片对象 绘制x坐标 绘制y坐标 图像的宽度 图像的高度
		context.drawImage(image, 0, 0, canvas.width, canvas.height)

		// S代表源图像的坐标 D代表目标图的坐标 共9个参数
		// context.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh)
		// context.drawImage(image, 200, 200, 400, 400, 0, 0, 100, 100)
	}
}





})(jQuery, window, document);