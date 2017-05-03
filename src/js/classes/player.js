export class Player {
	constructor(playerIcon, firstMove) {
		this.playerIcon = playerIcon;
		this.active = firstMove;
		this.squaresOccupied = [];
	}

	occupySquare(square) {
		this.squaresOccupied = [...this.squaresOccupied, square];
	}

	getOccupiedSquares() {
		return this.squaresOccupied;
	}

	getIcon() {
		return this.playerIcon;
	}

	switchStatus() {
		this.active = !this.active;
	}
}