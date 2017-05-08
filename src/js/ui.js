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

	getSquare: function getSquare(number) {
		const squares = this.getSquares();
		let square;

		for (const sq of squares) {
			if (parseInt(sq.getAttribute('data-square')) === number) {
				square = sq;
			}
		}

		return square;
	},

	endGame: function endGame(winner) {
		const dialog = document.getElementsByClassName('end-game')[0];
		const msg = document.getElementsByClassName('winner')[0];

		dialog.style.left = ((window.innerWidth / 2) - 74) + 'px';
		dialog.style.top = ((window.innerHeight / 2) - 105) + 'px';

		msg.textContent = winner;

		document.getElementsByClassName('overlay')[0].style.display = 'block';
		dialog.style.display = 'block';
	},

	nextGame: function nextGame() {
		document.getElementsByClassName('end-game')[0].style.display = 'none';
		document.getElementsByClassName('overlay')[0].style.display = 'none';
		document.getElementsByClassName('choose-token')[0].style.display = 'flex';
		document.getElementsByClassName('board-outer')[0].style.display = 'none';
	},

	clearBoard: function clearBoard() {
		const squares = this.getSquares();

		for (const square of squares) {
			// Removing the child nodes - should only be one (or none), but loop to be sure
			while (square.hasChildNodes()) {
				square.removeChild(square.lastChild);
			}
		}
	}
};