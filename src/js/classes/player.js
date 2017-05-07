export class Player {
	constructor(playerToken, firstMove) {
		this.playerToken = playerToken;
		this.active = firstMove;
		this.squaresOccupied = [];
	}

	occupySquare(square) {
		this.squaresOccupied = [...this.squaresOccupied, square];
	}

	getOccupiedSquares() {
		return this.squaresOccupied;
	}

	getToken() {
		return this.playerToken;
	}

	switchStatus() {
		this.active = !this.active;
	}

	isActive() {
		return this.active;
	}
}