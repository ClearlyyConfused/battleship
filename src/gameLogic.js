import { GameBoard } from './gameBoardLogic';

class Game {
	constructor() {
		this.player1Board = new GameBoard();
		this.player2Board = new GameBoard();
		this.boards = [this.player1Board, this.player2Board];
		this.ship1 = [false, false];
		this.ship2 = [false, false];
		this.ship3 = [false, false];
		this.fireMode = false;
	}

	startGame() {
		this.player1Board.gameStatus = true;
		this.player2Board.gameStatus = true;
		this.ship1 = [false, false];
		this.ship2 = [false, false];
		this.ship3 = [false, false];
		this.fireMode = false;
		this.player1Board.resetBoard();
		this.player2Board.resetBoard();
	}

	addShips(row, col, orientation, player) {
		let length;

		if (this.ship1[player] === false) {
			length = 3;
		} else if (this.ship2[player] === false) {
			length = 4;
		} else if (this.ship3[player] === false) {
			length = 5;
		}

		if (this.checkLegalMove(player, row, col, length) === false) {
			return;
		}

		if (this.ship1[player] === false) {
			this.boards[player].addShip(length, row, col, orientation);
			this.ship1[player] = true;
		} else if (this.ship2[player] === false) {
			this.boards[player].addShip(length, row, col, orientation);
			this.ship2[player] = true;
		} else if (this.ship3[player] === false) {
			this.boards[player].addShip(length, row, col, orientation);
			this.ship3[player] = true;
		}
		console.log(this.boards[player].boardArray);
	}

	checkLegalMove(player, row, col, length) {
		let x = 0;
		while (x < length) {
			if (this.boards[player].boardArray[parseInt(row) + x][parseInt(col)] === '') {
			} else {
				return false;
			}
			x += 1;
		}
		return true;
	}
}

export { Game };
