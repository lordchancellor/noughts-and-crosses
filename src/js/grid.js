export class Grid {
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
			if (positions.indexOf(arr[0]) !== -1 
					&& positions.indexOf(arr[1]) !== -1 
					&& positions.indexOf(arr[2]) !== -1) {
						win = true;
						break;
					}
		}

		return win;
	}

	checkForDraw() {
		return this.grid.findIndex(x => x === '') === -1;
	}
}