import { game } from './game';

export const minimax = {
	numNodes: 0,
	playerToken: null,
	aiToken: null,

	setNodes: function setNodes(val) {
		this.numNodes = val;
	},

	getNodes: function getNodes() {
		return this.numNodes;
	},

	setPlayerToken: function setPlayerToken(token) {
		this.playerToken = token;
	},

	setAiToken: function setAiToken(token) {
		this.aiToken = token;
	},

	recurseMinimax: function recurseMinimax(board, isPlayer) {
		const playerSquares = game.player.getOccupiedSquares();
		const aiSquaes = game.player.getOccupiedSquares();
		const winner = game.board.checkGameStatus(playerSquares, aiSquaes);

		minimax.numNodes++;

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
					const tokenToAdd = isPlayer ? minimax.playerToken : minimax.aiToken;

					board.splice(idx, 1, tokenToAdd);

					const value = this.recurseMinimax(board, !isPlayer)[0];

					if ((isPlayer && (nextVal === null || value > nextVal)) || (!isPlayer && (nextVal === null || value < nextVal))) {
						nextBoard = board.slice();
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

		// console.log(this.recurseMinimax(board, true)[1]);

		return this.recurseMinimax(board, true)[1];
	}

};