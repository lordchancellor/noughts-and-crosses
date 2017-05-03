import { ui } from './ui';

export const setup = {
	setListeners: function setListeners() {
		document.getElementById('choose-x').addEventListener('click', () => {
			console.log('Choose X');
			ui.activateBoard();
		});

		document.getElementById('choose-o').addEventListener('click', () => {
			console.log('Choose O');
			ui.activateBoard();
		});
	},

	go: function go() {
		this.setListeners();
	}
};