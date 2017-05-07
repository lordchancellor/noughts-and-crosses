export const ui = {
	activateBoard: function activateBoard() {
		document.getElementsByClassName('choose-token')[0].style.display = 'none';
		document.getElementsByClassName('board-outer')[0].style.display = 'flex';
	},

	getSquares: function getSquares() {
		const left = document.getElementsByClassName('left');
		const center = document.getElementsByClassName('center');
		const right = document.getElementsByClassName('right');
		let squares = [];

		for (const square of left) {
			squares = [...squares, square];
		}

		for (const square of center) {
			squares = [...squares, square];
		}

		for (const square of right) {
			squares = [...squares, square];
		}

		return squares;
	},

	getSquare(number) {
		const squares = this.getSquares();
		let square;

		for (const sq of squares) {
			if (parseInt(sq.getAttribute('data-square')) === number) {
				square = sq;
			}
		}

		return square;
	}
};