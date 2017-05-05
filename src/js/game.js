import { Player } from './classes/player';
import { Board } from './classes/board';

export const game = {
    board: new Board(),
    player: undefined,
    ai: undefined,

    setPlayer: function setPlayer(token) {
        if (token === 'X') {
            this.player = new Player('X', true);
        }
        else {
            this.player = new Player('O', false);
        }

        this.setAI();
    },

    setAI: function setAI() {
        if (this.player.getToken() === 'X') {
            this.ai = new Player('O', false);
        }
        else {
            this.ai = new Player('X', true);
        }
    },

    aiTurn: function aiTurn() {
        let turnTaken = false;

        do {
            const randomSpace = Math.floor(Math.random() * 9);

            if (this.board.spaceIsEmpty(randomSpace)) {
                this.board.placeMarker(randomSpace, this.ai.getToken());
                this.ai.occupySquare(randomSpace);
                turnTaken = true;
            }
        } while (!turnTaken);

        this.endTurn(this.ai.getOccupiedSquares());
    },

    playerTurn: function playerTurn(loc) {
        this.board.placeMarker(loc, this.player.getToken());
        this.player.occupySquare(loc);
        this.endTurn(this.player.getOccupiedSquares());
    },

    endTurn: function endTurn(positions) {
        this.board.printGrid();
        if (this.board.checkForDraw()) { console.log('Draw'); }
        if (this.board.checkForWin(positions)) { console.log('Winner'); }
    }
};