export class Board {
	constructor() {
		this.grid = [
			'', '', '',
			'', '', '',
			'', '', ''
		];

		this.winningCombos = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],

			[0, 4, 8],
			[2, 4, 6]
		];
	}

	checkGameStatus(playerPos, aiPos) {
		// Game status return codes (to aid with minimax scoring):
		// 1 -> AI wins
		// 0 -> Draw
		// -1 -> Player wins
		// false -> Game not over
		for (const arr of this.winningCombos) {
			if (playerPos.includes(arr[0]) && playerPos.includes(arr[1]) && playerPos.includes(arr[2])) {
				return -1;
			}
			else if (aiPos.includes(arr[0]) && aiPos.includes(arr[1]) && aiPos.includes(arr[2])) {
				return 1;
			}
		}

		if (this.grid.findIndex(x => x === '') === -1) {
			return 0;
		}

		return false;
	}

	spaceIsEmpty(loc) {
		return this.grid[loc] === '';
	}

	placeToken(loc, token, el) {
		if (this.spaceIsEmpty(loc)) {
			this.grid.splice(loc, 1, token);
			
			if (el) el.appendChild(this.createTokenElement(token));
		}
	}

	createTokenElement(token) {
		const h2 = document.createElement('h2');
		const tokenClass = token === 'X' ? 'cross' : 'nought';

		h2.classList.add('token');
		h2.classList.add(tokenClass);
		h2.textContent = token;

		return h2;
	}

	getEmptySquares() {
		let emptySquares = [];

		for (const [idx, square] of this.grid.entries()) {
			if (square === '') {
				emptySquares = [...emptySquares, idx];
			}
		}

		return emptySquares;
	}

	getBoard() {
		return this.grid;
	}

	// TODO - Remove
	printGrid() {
		console.log(`${this.grid[0]} ${this.grid[1]} ${this.grid[2]}`);
		console.log(`${this.grid[3]} ${this.grid[4]} ${this.grid[5]}`);
		console.log(`${this.grid[6]} ${this.grid[7]} ${this.grid[8]}`);
	}
}