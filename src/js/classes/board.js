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

	static spaceIsEmpty(loc) {
		return this.grid[loc] === '';
	}

	placeMarker(loc, token) {
		if (this.spaceIsEmpty(loc)) {
			this.grid.splice(loc, 1, token);
		}
	}
}