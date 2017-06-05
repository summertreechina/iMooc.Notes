(function(){
	'use strict';
	let me = true;
	let chessBoard = [];
	let chess = document.querySelector('#chess');
	let context = chess.getContext('2d');


	context.strokeStyle = '#bfbfbf';

	let logo = new Image();
	logo.src = "./images/IMG_3917.png";
	logo.onload = function() {
		// 画logo
		// context.drawImage(logo, 10, 10, 580, 580);
		drawChessBoard();
		clearBoard();
	}

	chess.onclick = function(e) {
		let x = e.offsetX;
		let y = e.offsetY;
		let i = Math.floor(x / 40);
		let j = Math.floor(y / 40);
		if (chessBoard[i][j] === 0) {
			drawChess(i, j, me);
			if (me) {
				chessBoard[i][j] = 1;
			} else {
				chessBoard[i][j] = 2;
			}
		}
		me =! me;
	}



// 清空棋盘数据
function clearBoard() {
	for (let i = 0; i < 15; i++) {
		chessBoard[i] = [];
		for (var j = 0; j < 15; j++) {
			chessBoard[i][j] = 0;
		}
	}
}
// 画棋盘线
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
// 画棋子
// i, j 是棋子在棋盘上的索引
// me 黑棋或白棋
function drawChess(i, j, me) {
	context.beginPath();
	context.arc(20+i*40, 20+j*40, 16, 0, 2*Math.PI);
	context.closePath();
	let gradient = context.createRadialGradient(20+i*40+4, 20+j*40-4, 10, 20+i*40+6, 20+j*40-6, 0);
	if (me) {
		gradient.addColorStop(0, '#0a0a0a');
		gradient.addColorStop(1, '#636766');
	} else {
		gradient.addColorStop(0, '#d1d1d1');
		gradient.addColorStop(1, '#f9f9f9');
	}
	context.fillStyle = gradient;
	context.fill();
}













})();