import { ui } from './ui';
import { game } from './game';

export const setup = {
	setListeners: function setListeners() {
		document.getElementById('choose-x').addEventListener('click', () => {
			console.log('Choose X');
			ui.activateBoard();
			game.setPlayer('X');
		});

		document.getElementById('choose-o').addEventListener('click', () => {
			console.log('Choose O');
			ui.activateBoard();
			game.setPlayer('O');
		});
	},

	go: function go() {
		this.setListeners();
	}
};