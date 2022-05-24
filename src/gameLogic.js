import { GameBoard } from './gameBoardLogic';

class Game {
	constructor() {
		this.player1Board = new GameBoard();
		this.player2Board = new GameBoard();
		this.turn = 0;
		this.ship1 = [false, false];
		this.ship2 = [false, false];
		this.ship3 = [false, false];
	}

	startGame() {
		this.turn = 0;
		this.player1Board.gameStatus = true;
		this.player2Board.gameStatus = true;
		this.ship1 = [false, false];
		this.ship2 = [false, false];
		this.ship3 = [false, false];
	}

	addShipsP1(row, col, orientation) {
		let length = 3;
		let x = 0;

		while (x < length) {
			if (this.player1Board.boardArray[parseInt(row) + x][parseInt(col)] === '') {
			} else {
				console.log('error cannot place here');
				return;
			}
			x += 1;
		}

		if (this.ship1[0] === false) {
			this.player1Board.addShip(length, row, col, orientation);
			this.ship1[0] = true;
		} else if (this.ship2[0] === false) {
			this.player1Board.addShip(length + 1, row, col, orientation);
			this.ship2[0] = true;
		} else if (this.ship3[0] === false) {
			this.player1Board.addShip(length + 2, row, col, orientation);
			this.ship3[0] = true;
		}
		console.log('board1:');
		console.log(this.player1Board.boardArray);
	}

	addShipsP2(row, col, orientation) {
		let length = 3;
		let x = 0;

		while (x < length) {
			if (this.player2Board.boardArray[parseInt(row) + x][parseInt(col)] === '') {
			} else {
				return;
			}
			x += 1;
		}

		if (this.ship1[1] === false) {
			this.player2Board.addShip(length, row, col, orientation);
			this.ship1[1] = true;
		} else if (this.ship2[1] === false) {
			this.player2Board.addShip(length + 1, row, col, orientation);
			this.ship2[1] = true;
		} else if (this.ship3[1] === false) {
			this.player2Board.addShip(length + 2, row, col, orientation);
			this.ship3[1] = true;
		}
		console.log('board2:');
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
