import { ui } from './ui';
import { game } from './game';

export const setup = {
	setListeners: function setListeners() {
		const chooseX = document.getElementById('choose-x');
		const chooseO = document.getElementById('choose-o');
		const nextGame = document.getElementsByClassName('play-again')[0];
		const squares = ui.getSquares();

		chooseX.addEventListener('click', () => {
			console.log('Choose X');
			ui.activateBoard();
			game.setPlayer('X');
		});

		chooseO.addEventListener('click', () => {
			console.log('Choose O');
			ui.activateBoard();

			if (game.playWithMinimax()) {
				new Promise(() => game.setPlayer('O'))
						.then(setTimeout(() => {
							game.smartAiTurn();
						}), 250);
			}
			else {
				new Promise(() => game.setPlayer('O'))
						.then(setTimeout(() => {
							game.dumbAiTurn();
						}), 250);
			}
		});

		nextGame.addEventListener('click', () => {
			ui.nextGame();
			game.clearGame();
		});

		for (const square of squares) {
			square.addEventListener('click', (e) => {
				if (game.isPlayerTurn()) {
					game.playerTurn(e.target);
				}
			});
		}
	},

	setYear: function setYear() {
		document.getElementsByClassName('current-year')[0].textContent = new Date().getFullYear();
	},

	go: function go() {
		this.setListeners();
		this.setYear();
	}
};