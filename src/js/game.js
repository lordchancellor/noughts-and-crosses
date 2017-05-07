import { Player } from './classes/player';
import { Board } from './classes/board';

export const game = {
    board: new Board(),
    player: undefined,
    ai: undefined,

    setPlayer: function setPlayer(token) {
        const firstTurn = token === 'X' ? true : false;

        this.player = new Player(token, firstTurn);

        this.setAI();
    },

    setAI: function setAI() {
        const aiToken = this.player.getToken() === 'X' ? 'O' : 'X';
        const firstTurn = this.player.getToken() === 'X' ? false : true;

        this.ai = new Player(aiToken, firstTurn);
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
        this.endTurn(this.player.getOccupiedSquares(), this.ai.getOccupiedSquares());
    },

    endTurn: function endTurn(playerPos, aiPos) {
        this.board.printGrid();
        if (this.board.checkForDraw()) { 
            console.log('Draw'); 
        }
        else if (this.board.checkForWin(playerPos)) { 
            console.log('Player Wins!'); 
        }
        else if (this.board.checkForWin(aiPos)) {
            console.log('AI Wins!');
        }
    }
};