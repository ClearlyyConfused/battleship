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

			if (
				this.player1Board.addShip(x + 3, row, col, orientation) ===
				'Error, cannot place here!'
			) {
				alert('Error, cannot place here!');
				x -= 1;
			} else {
				this.player1Board.addShip(x + 3, row, col, orientation);
			}

			x += 1;
		}
		x = 0;
		while (x < 3) {
			let row = prompt('What is the row?');
			let col = prompt('What is a column?');
			let orientation = prompt('What is the orientation?');

			if (
				this.player2Board.addShip(x + 3, row, col, orientation) ===
				'Error, cannot place here!'
			) {
				alert('Error, cannot place here!');
				x -= 1;
			} else {
				this.player2Board.addShip(x + 3, row, col, orientation);
			}

			x += 1;
		}
		console.log(this.player1Board.boardArray);
		console.log(this.player2Board.boardArray);
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
				console.log(this.player1Board.boardArray);
			} else {
				row = prompt('What is the row?');
				col = prompt('What is a column?');
				this.player2Board.fireAt(row, col);
				console.log(this.player2Board.boardArray);
			}
			this.turn += 1;
			return 'Round is played';
		}
		console.log('Game is Over');
		return 'Game is Over';
	}

	resetGame() {
		this.player1Board.resetBoard();
		this.player2Board.resetBoard();
	}
}

export { Game };
