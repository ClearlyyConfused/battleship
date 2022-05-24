import { GameBoard } from './gameBoardLogic';

class Game {
	constructor() {
		this.player1Board = new GameBoard();
		this.player2Board = new GameBoard();
	}

	startGame() {
		let x = 0;
		while (x < 3) {
			let row = prompt('What is the row?');
			let col = prompt('What is a column?');
			let orientation = prompt('What is a orientation?');

			this.addShip(this.player1Board, x + 2, row, col, orientation);
			x += 1;
		}
		x = 0;
		while (x < 3) {
			let row = prompt('What is the row?');
			let col = prompt('What is a column?');
			let orientation = prompt('What is a orientation?');

			this.addShip(this.player2Board, x + 2, row, col, orientation);
			x += 1;
		}
		this.gameState();
	}

	gameState() {
		let x = 0;
		let row;
		let col;
		while (
			this.player1Board.gameStatus !== 'false' ||
			this.player2Board.gameStatus !== 'false'
		) {
			if (x % 2 === 0) {
				row = prompt('What is the row?');
				col = prompt('What is a column?');
				this.player1Board.fireAt(row, col);
			} else {
				row = prompt('What is the row?');
				col = prompt('What is a column?');
				this.player2Board.fireAt(row, col);
			}
		}
	}

	resetGame() {
		this.player1Board.resetBoard();
		this.player2Board.resetBoard();
	}

	addShip(board, length, row, col, orientation) {
		board.addShip(length, row, col, orientation);
	}
}

export { Game };
