import { GameBoard } from './gameBoardLogic';

class Game {
	constructor() {
		this.player1Board = new GameBoard();
		this.player2Board = new GameBoard();
		this.turn = 0;
	}

	startGame(prompt) {
		let x = 0;
		this.turn = 0;
		this.player1Board.gameStatus = true;
		this.player2Board.gameStatus = true;

		while (x < 3) {
			let row = prompt('What is the row?');
			let col = prompt('What is a column?');
			let orientation = prompt('What is a orientation?');

			this.player1Board.addShip(x + 3, row, col, orientation);
			x += 1;
		}
		x = 0;
		while (x < 3) {
			let row = prompt('What is the row?');
			let col = prompt('What is a column?');
			let orientation = prompt('What is the orientation?');

			this.player2Board.addShip(x + 3, row, col, orientation);
			x += 1;
		}
	}

	playRound(prompt) {
		let row;
		let col;
		while (
			this.player1Board.gameStatus === true &&
			this.player2Board.gameStatus === true
		) {
			if (this.turn % 2 === 0) {
				row = prompt('What is the row?');
				col = prompt('What is a column?');
				this.player1Board.fireAt(row, col);
			} else {
				row = prompt('What is the row?');
				col = prompt('What is a column?');
				this.player2Board.fireAt(row, col);
			}
			this.turn += 1;
			return 'Round is played';
		}
		return 'Game is Over';
	}

	resetGame() {
		this.player1Board.resetBoard();
		this.player2Board.resetBoard();
	}
}

export { Game };
