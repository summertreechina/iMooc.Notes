(function(){
	'use strict';

	let chess = document.querySelector('#chess');
	let context = chess.getContext('2d');

	context.strokeStyle = '#bfbfbf';

	let logo = new Image();
	logo.src = "./images/IMG_3917.png";
	logo.onload = function() {
		context.drawImage(logo, 10, 10, 580, 580);
		drawChessBoard();
	}








function drawChessBoard() {
	for (let i = 0; i < 15; i++) {
		// 横线
		context.moveTo(20, 20 + i*40);
		context.lineTo(580, 20 + i*40);
		context.stroke();
		// 竖线
		context.moveTo(20 + i*40, 20);
		context.lineTo(20 + i*40, 580);
		context.stroke();
	}
}















})();