import { Player } from './classes/player';
import { Board } from './classes/board';
import { ui } from './ui';

export const game = {
    board: new Board(),
    player: undefined,
    ai: undefined,

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

    aiTurn: function aiTurn() {
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

    playerTurn: function playerTurn(el) {
        const squareNumber = parseInt(el.getAttribute('data-square'));
 
        this.board.placeToken(squareNumber, this.player.getToken(), el);
        this.player.occupySquare(squareNumber);
        this.endTurn(this.player.getOccupiedSquares(), this.ai.getOccupiedSquares());
    },

    endTurn: function endTurn(playerPos, aiPos) {
        this.board.printGrid();

        if (this.board.checkForWin(playerPos)) { 
            setTimeout(() => ui.endGame("It's a draw!"), 300); 
        }
        else if (this.board.checkForWin(aiPos)) { 
            setTimeout(() => ui.endGame('You win!'), 300); 
        }
        else if (this.board.checkForDraw()) {
            setTimeout(() => ui.endGame('You lose...'), 300); 
        }
        else {
            this.switchTurns();

            if (!this.isPlayerTurn()) {
                setTimeout(() => this.aiTurn(), 500);
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

    clearGame: function clearGame() {
        this.board = new Board();
        ui.clearBoard();
    }
};