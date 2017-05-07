import { ui } from './ui';
import { game } from './game';

export const setup = {
	setListeners: function setListeners() {
		const chooseX = document.getElementById('choose-x');
		const chooseO = document.getElementById('choose-o');
		const squares = ui.getSquares();

		chooseX.addEventListener('click', () => {
			console.log('Choose X');
			ui.activateBoard();
			game.setPlayer('X');
		});

		chooseO.addEventListener('click', () => {
			console.log('Choose O');
			ui.activateBoard();
			new Promise(() => game.setPlayer('O'))
					.then(setTimeout(() => game.aiTurn(), 500));
		});

		for (const square of squares) {
			square.addEventListener('click', (e) => {
				if (game.isPlayerTurn()) {
					game.playerTurn(e.target);
				}
			});
		}
	},

	go: function go() {
		this.setListeners();
	}
};