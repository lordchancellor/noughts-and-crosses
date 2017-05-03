export class Player {
	constructor(playerIcon) {
		this.playerIcon = playerIcon;
		this.active = false;
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

	readyPlayer() {
		this.active = true;
	}
}