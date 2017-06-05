(function(){
	'use strict';
	let me          = true;
	let chessBoard  = [];
	let wins        = [];
	let myWin       = [];
	let computerWin = [];
	let over        = false;
	let chess       = document.querySelector('#chess');
	let context     = chess.getContext('2d');
	let count       = 0;

	// 画棋盘
	drawChessBoard();
	// 所有落子数据归零
	clearBoard();

	getWinsList();
	
	initScore();


chess.onclick = function(e) {
	if (over) {
		return;
	}
	let x = e.offsetX;
	let y = e.offsetY;
	let i = Math.floor(x / 40);
	let j = Math.floor(y / 40);
	if (chessBoard[i][j] === 0) {
		drawChess(i, j, me);
		if (me) {
			chessBoard[i][j] = 1;
			for (var k = 0; k < count; k++) {
				if (wins[i][j][k]) {
					myWin[k]++;
					computerWin[k] = 6;
					if (myWin[k] == 5) {
						over = true;
						window.alert("你赢了！");
					}
				}
			}
		} else {
			chessBoard[i][j] = 2;
			for (var k = 0; k < count; k++) {
				if (wins[i][j][k]) {
					computerWin[k]++;
					myWin[k] = 6;
					if (computerWin[k] == 5) {
						over = true;
						window.alert("计算机赢了！");
					}
				}
			}
		}
	}
	me =! me;
	if (!over) {
		// 1:11
		me = !me;
		computerAI();
	}
}

function computerAI() {
	let myScore = [];
	let computerScore = [];
	let max = 0;
	let u = 0;
	let v = 0;
	// 初始化
	for (let i = 0; i < 15; i++) {
		myScore[i] = [];
		computerScore[i] = [];
		for (let j = 0; j < 15; j++) {
			myScore[i][j] = 0;
			computerScore[i][j] = 0;
		}
	}
	// 
	for (let i = 0; i < 15; i++) {
		for (let j = 0; j < 15; j++) {
			if (wins[i][j][k]) {
				switch(myWin[k])
				{
					case 1: myScore[i][j] += 200;
						break;
					case 2: myScore[i][j] += 400;
						break;
					case 3: myScore[i][j] += 2000;
						break;
					case 4: myScore[i][j] += 10000;
						break;
				}
				switch(computerWin[k])
				{
					case 1: computerScore[i][j] += 220;
						break;
					case 2: computerScore[i][j] += 440;
						break;
					case 3: computerScore[i][j] += 2200;
						break;
					case 4: computerScore[i][j] += 20000;
						break;
				}

				if (myScore[i][j] > max) {
					max = myScore[i][j];
					u = i;
					v = j;
				} else if (myScore[i][j] == max) {
					if (computerScore[i][j] > computerScore[u][v]) {
						u = i;
						v = j;
					}
				}
				if (computerScore[i][j] > max) {
					max = computerScore[i][j];
					u = i;
					v = j;
				} else if (computerScore[i][j] == max) {
					if (myScore[i][j] > myScore[u][v]) {
						u = i;
						v = j;
					}
				}
			}
		}
	}
}

// 清空棋盘落子数据
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
	context.strokeStyle = '#bfbfbf';
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
function drawChess(i, j, me) {
	// i, j 是棋子在棋盘上的索引
	// me 黑棋或白棋
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

function getWinsList() {
	for (let i = 0; i < 15; i++) {
		wins[i] = [];
		for (let j = 0; j < 15; j++) {
			wins[i][j] = [];
		}
	}
	// 
	for (let i = 0; i < 15; i++) {
		for (let j = 0; j < 11; j++) {
			for (let k = 0; k < 5; k++) {
				wins[i][j+k][count] = true;
			}
			count++;
		}
	}
	// 竖线
	for (let i = 0; i < 15; i++) {
		for (let j = 0; j < 11; j++) {
			for (let k = 0; k < 5; k++) {
				wins[j+k][i][count] = true;
			}
			count++;
		}
	}
	// 斜线
	for (let i = 0; i < 11; i++) {
		for (let j = 0; j < 11; j++) {
			for (let k = 0; k < 5; k++) {
				wins[i+k][j+k][count] = true;
			}
			count++;
		}
	}
	// 反斜线
	for (let i = 0; i < 11; i++) {
		for (let j = 14; j > 3; j--) {
			for (let k = 0; k < 5; k++) {
				wins[i+k][j-k][count] = true;
			}
			count++;
		}
	}
}

function initScore() {
	for (let i = 0; i < count; i++) {
		myWin[i] = 0;
		computerWin[i] = 0;
	}
}

function check_is_win(i, j) {
	for (var k = 0; k < count; k++) {
		if (wins[i][j][k]) {
			myWin[k]++;
			computerWin[k] = 6;
			if (myWin[k] == 5) {
				window.alert("你赢了！");
				over = true;
			}
		}
	}
}

// let logo = new Image();
// logo.src = "./images/IMG_3917.png";
// logo.onload = function() {
// 	// 画logo
// 	// context.drawImage(logo, 10, 10, 580, 580);
// }


})();