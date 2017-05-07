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

	checkForWin(positions) {
		let win = false;

		for (const arr of this.winningCombos) {
			if (positions.includes(arr[0]) && positions.includes(arr[1]) && positions.includes(arr[2])) {
				win = true;
				break;
			}
		}

		return win;
	}

	checkForDraw() {
		return this.grid.findIndex(x => x === '') === -1;
	}

	spaceIsEmpty(loc) {
		return this.grid[loc] === '';
	}

	placeToken(loc, token, el) {
		console.log(el);
		
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

	// TODO - Remove
	printGrid() {
		console.log(`${this.grid[0]} ${this.grid[1]} ${this.grid[2]}`);
		console.log(`${this.grid[3]} ${this.grid[4]} ${this.grid[5]}`);
		console.log(`${this.grid[6]} ${this.grid[7]} ${this.grid[8]}`);
	}
}