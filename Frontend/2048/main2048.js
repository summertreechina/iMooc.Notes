$(function(){
	let board = [];
	let scord = 0;

	newGame();

	function newGame() {
		// 初始化棋盘格
		init();
		// 随机在两个格子中生成数字
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
			for (var j = 0; j < 4; j++) {
				let number_cell = `<div class="number-cell" id="number-cell-${i}-${j}">0</div>`;
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
					$numberCell.css(board[i][j]);
				}
			}
		}
	}
});











