;(function($){

	'use strict'


	/*滤镜效果*/
	var canvas = document.querySelector('#raw-image');
	var context = canvas.getContext('2d');

	var canvas_effect = document.querySelector('#effect-image');
	var context_effect = canvas_effect.getContext('2d');

	var image = new Image();
	// image.crossOrigin = '';	
	image.src = './IMG/4.jpg';

	image.onload = function() {
		var imageW = image.width;
		var imageH = image.height;
		var scale = imageW / imageH;

		canvas.width = 660;
		canvas.height = 660 / scale;

		canvas_effect.width = canvas.width;
		canvas_effect.height = canvas.height;

		image.width = canvas.width;
		image.height = canvas.height;

		context.drawImage(image, 0, 0);
	}

	canvas_effect.onmousedown = function() {
		console.log(canvas.toDataURL())
		// var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
		// context_effect.putImageData(imageData, 0, 0, 0, 0, canvas_effect.width, canvas_effect.height);
		// var newImageData = context.putImageData(imageData, dx, dy,  dirtyX, dirtyY, dirtyW, dirtyH);

	}

	/*数字之美*/
	var Bcanvas = document.querySelector('#beautiful-canvas');
	var Bcontext = Bcanvas.getContext('2d');

	Bcanvas.onmousedown = function(e) {
		e.preventDefault();

		Bcanvas.width = 800;
		Bcanvas.height = 800;

		var BimageData = Bcontext.createImageData(Bcanvas.width, Bcanvas.height);
		var pixelData = BimageData.data;

		for( var i = 0; i < Bcanvas.height; i ++ )
		    for( var j = 0; j < Bcanvas.width; j ++ ){

		        var p = i*Bcanvas.width+j;

		        pixelData[4*p+0] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2),2)*255);
		        pixelData[4*p+1] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2-2*Math.acos(-1)/3),2)*255);
		        pixelData[4*p+2] = parseInt(Math.pow(Math.cos(Math.atan2(j-400,i-400)/2+2*Math.acos(-1)/3),2)*255);
		        pixelData[4*p+3] = 255;
		    }

		Bcontext.putImageData( BimageData , 0 , 0 , 0 , 0 , Bcanvas.width , Bcanvas.height );

		// $(Bcanvas).fadeOut("slow");
		// $(Bcanvas).slideUp("slow");
	}

	/*渐变效果 暂未成功*/		
	var cCanvas = document.querySelector('#gradual-change');
	var cContext = cCanvas.getContext('2d');
	cCanvas.width = 255;
	cCanvas.height = 255;

	var cImageData = cContext.createImageData(cCanvas.width, cCanvas.height);
	var cData = cImageData.data;

	// for (var i = 0; i < cCanvas.height*cCanvas.height; i++) {
		// cData[4*i + 0] = 255;	// R
		// cData[4*i + 1] = 255;	// A
		// cData[4*i + 2] = 0;		// B
		// cData[4*i + 3] = 255;	// A
	// }
	for (var x = 0; x < cCanvas.height; x++) {
		for (var y=0; y<cCanvas.width; y++) {

			// 第 X 行 第 Y 列的像素 I   如 第0行 第9列的像素
			var i = x*cCanvas.width + y;

			cData[4*i + 0] = y;
			cData[4*i + 1] = x;
			cData[4*i + 2] = i;
			cData[4*i + 3] = 255;
		}
	}


	console.log(cData);
	cContext.putImageData(cImageData, 0,0,0,0, cCanvas.width, cCanvas.height);
	

		






})(jQuery);