import { game } from './game';

export const minimax = {
	numNodes: 0,

	setNodes: function setNodes(val) {
		this.numNodes = val;
	},

	getNodes: function getNodes() {
		return this.numNodes;
	},

	recurseMinimax: function recurseMinimax(board, isPlayer) {
		const playerSquares = game.player.getOccupiedSquares();
		const aiSquaes = game.player.getOccupiedSquares();
		const winner = game.board.checkGameStatus(playerSquares, aiSquaes);

		this.numNodes++;

		if (winner !== false) {
			switch (winner) {
				case 1:
					// AI Win
					return [1, board];
				case 0:
					// Draw
					return [0, board];
				case -1:
					// Player Win
					return [-1, board];
				default:
					break;
			}
		}
		else {
			// Get the next states
			let nextVal = null;
			let nextBoard = [];

			for (const [idx, square] of board.entries()) {
				if (square === '') {
					board.splice(idx, 1, isPlayer);

					const value = this.recurseMinimax(board, !isPlayer)[0];

					if ((isPlayer && (nextVal === null || value > nextVal)) || (!isPlayer && (nextVal === null || value < nextVal))) {
						// nextBoard = board.map((arr) => arr.slice());
						nextBoard = board;
						nextVal = value;
					}

					board.splice(idx, 1, '');
				}
			}

			return [nextVal, nextBoard];
		}
	},

	minimaxMove: function minimaxMove(board) {
		this.setNodes(0);

		return this.recurseMinimax(board, true)[1];
	}

};