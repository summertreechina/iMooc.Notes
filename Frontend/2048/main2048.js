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
				console.log(i +'-'+ j);
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

	}
});











