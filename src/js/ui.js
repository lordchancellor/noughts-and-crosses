export const ui = {
	activateBoard: function activateBoard() {
		document.getElementsByClassName('choose-token')[0].style.display = 'none';
		document.getElementsByClassName('board-outer')[0].style.display = 'flex';
	}
};