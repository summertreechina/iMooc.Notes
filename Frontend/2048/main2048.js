$(function(){
	let board = [];
	let scord = 0;

	newGame();

	$('#newGameBtn').on('click', function(event) {
		event.preventDefault();
		newGame();
	});

	$(document).keydown(function(event) {
		switch(event.keyCode) {
			case 37: 	// left
				if (moveLeft()) {
					generateOneNumber();
					isGameOver();
				}
				break;
			case 38: 	// up
				break;
			case 39: 	// right
				break;
			case 40: 	// down
				break;
			default:
				break;
		}
	});

	function newGame() {
		// 初始化棋盘格
		init();
		// 随机在两个格子中生成数字
		// generateNumber(2, 1);
		generateOneNumber();
		generateOneNumber();
	}

	function init() {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				// console.log(i +'-'+ j);
				$('#grid-cell-'+i+'-'+j).css('left', '120px');
				let gridCell = $('#grid-cell-'+i+'-'+j);
				gridCell.css('top', getPosTop(i, j));
				gridCell.css('left', getPosLeft(i, j));
			}
			for (let i = 0; i < 4; i++) {
				board[i] = [];
				for (var j = 0; j < 4; j++) {
					board[i][j] = 0;
				}
			}
		}

		updateBoardView();
	}

	function getPosTop(i, j) {
		let top = 20 + (i * 120);
		return top+'px';
	}

	function getPosLeft(i, j) {
		let left = 20 + (j * 120);
		return left+'px';
	}

	function updateBoardView() {
		$('.number-cell').remove();

		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				let number_cell = `<div class="number-cell" id="number-cell-${i}-${j}"></div>`;
				$('#grid-container').append(number_cell);
				let $numberCell = $(`#number-cell-${i}-${j}`);

				if (board[i][j] == 0) {
					$numberCell.css('height', '0px');
					$numberCell.css('width', '0px');
					$numberCell.css('top', getPosTop(i, j) + 50 );
					$numberCell.css('left', getPosLeft(i, j) + 50);
				} else {
					$numberCell.css('height', '100px');
					$numberCell.css('width', '100px');
					$numberCell.css('top', getPosTop(i, j));
					$numberCell.css('left', getPosLeft(i, j));
					$numberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
					$numberCell.css('color', getNumberColor(board[i][j]));
					$numberCell.text(board[i][j]);
				}
			}
		}
	}

	function getNumberBackgroundColor(number) {
		switch(number) {
			case 2: return '#eee4da'; break;
			case 4: return '#ede0c8'; break;
			case 8: return '#f2b179'; break;
			case 16: return '#f59563'; break;
			case 32: return '#f67c5f'; break;
			case 64: return '#f65e3b'; break;
			case 128: return '#edcf72'; break;
			case 256: return '#edcc61'; break;
			case 512: return '#9c0'; break;
			case 1024: return '#33b5e5'; break;
			case 2048: return '#09c'; break;
			case 4096: return '#a6c'; break;
			case 8192: return '#93c'; break;
		}
		return "black";
	}

	function getNumberColor(number) {
		if (number <= 4) {
			return '#776e65';
		}
		return 'white';
	}

	function generateOneNumber() {
		if (noSpace(board)) {
			return false;
		}
		// 生成一个随机位置
		let randx = parseInt(Math.floor(Math.random() * 4));
		let randy = parseInt(Math.floor(Math.random() * 4));
		while (true) {
			if (board[randx][randy] == 0) {
				break;
			}
			randx = parseInt(Math.floor(Math.random() * 4));
			randy = parseInt(Math.floor(Math.random() * 4));
		}
		// 随机生成一个数字
		let randNumber = (Math.random() > 0.5) ? 2 : 4;
		// 在随机位显示随机数字
		board[randx][randy] = randNumber;
		showNumberWithAnimation(randx, randy, randNumber);

		return true;
	}

	function noSpace(board) {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (board[i][j] == 0) {
					return false;
				}
				return true;
			}
		}
	}

	function showNumberWithAnimation(i, j, randNumber) {
		let numberCell = $(`#number-cell-${i}-${j}`);

		numberCell.css('background-color', getNumberBackgroundColor(randNumber));
		numberCell.css('color', getNumberColor(randNumber));
		numberCell.text(randNumber);

		numberCell.animate({
			width: '100px',
			height: '100px',
			top: getPosTop(i, j),
			left: getPosLeft(i, j)
		}, 500);
	}


});











