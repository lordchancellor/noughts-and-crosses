import { Player } from './classes/player';
import { Board } from './classes/board';
import { ui } from './ui';

export const game = {
    board: new Board(),
    player: undefined,
    ai: undefined,
    dumbAi: true,

    setPlayer: function setPlayer(token) {
        const firstTurn = token === 'X' ? true : false;

        this.player = new Player(token, firstTurn);

        return(this.setAI());
    },

    setAI: function setAI() {
        const aiToken = this.player.getToken() === 'X' ? 'O' : 'X';
        const firstTurn = this.player.getToken() === 'X' ? false : true;

        this.ai = new Player(aiToken, firstTurn);

        return true;
    },

    dumbAiTurn: function dumbAiTurn() {
        let turnTaken = false;

        do {
            const randomSpace = Math.floor(Math.random() * 9);

            if (this.board.spaceIsEmpty(randomSpace)) {
                const square = ui.getSquare(randomSpace);

                this.board.placeToken(randomSpace, this.ai.getToken(), square);
                this.ai.occupySquare(randomSpace);
                turnTaken = true;
            }
        } while (!turnTaken);

        this.endTurn(this.player.getOccupiedSquares(), this.ai.getOccupiedSquares());
    },

    smartAiTurn: function smartAiTurn() {
        console.log('Smart AI');
    },

    playerTurn: function playerTurn(el) {
        const squareNumber = parseInt(el.getAttribute('data-square'));
 
        if (this.board.spaceIsEmpty(squareNumber)) {
            this.board.placeToken(squareNumber, this.player.getToken(), el);
            this.player.occupySquare(squareNumber);
            this.endTurn(this.player.getOccupiedSquares(), this.ai.getOccupiedSquares());
        }
    },

    endTurn: function endTurn(playerPos, aiPos) {
        const winCode = this.board.checkGameStatus(playerPos, aiPos);

        this.board.printGrid();
        console.log(this.board.getEmptySquares());

        if (winCode !== false) {
            switch (winCode) {
                case 1:
                    setTimeout(() => ui.endGame('You lose...'), 300);
                    break;
                case 0:
                    setTimeout(() => ui.endGame("It's a draw!"), 300);
                    break;
                case -1:
                    setTimeout(() => ui.endGame('You win!'), 300);
                    break;
                default:
                    setTimeout(() => ui.endGame("Something went wrong"), 300);
                    break; 
            }
        }
        else {
            this.switchTurns();

            if (!this.isPlayerTurn()) {
                if (this.dumbAi) {
                    setTimeout(() => this.dumbAiTurn(), 500);
                }
                else {
                    setTimeout(() => this.smartAiTurn(), 500);
                }
            }
        }
    },

    switchTurns: function switchTurns() {
        this.player.switchStatus();
        this.ai.switchStatus();
    },

    isPlayerTurn: function isPlayerTurn() {
        return this.player.isActive();
    },

    isAiDumb: function isAiDumb() {
        return this.dumbAi;
    },

    clearGame: function clearGame() {
        this.board = new Board();
        ui.clearBoard();
    }
};