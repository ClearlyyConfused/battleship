class GameBoard {
	constructor() {
		this.boardArray = [
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
		];
		this.gameStatus = true;
	}

	addShip(length, row, col, orientation) {
		row = parseInt(row);
		col = parseInt(col);

		if (orientation === 'h' && this.checkMoveH(length, row, col)) {
			this.addShipH(length, row, col);
			return;
		}
		if (orientation === 'v' && this.checkMoveV(length, row, col)) {
			this.addShipV(length, row, col);
			return;
		}
		throw 'Error, cannot place here!';
	}

	addShipH(length, row, col) {
		let x = 0;
		while (x < length) {
			this.boardArray[row][col + x] = 'o';
			x += 1;
		}
	}

	addShipV(length, row, col) {
		let x = 0;
		while (x < length) {
			this.boardArray[row + x][col] = 'o';
			x += 1;
		}
	}

	checkMoveH(length, row, col) {
		let x = 0;
		while (x < length) {
			if (this.boardArray[row][col + x] === '') {
			} else {
				return false;
			}
			x += 1;
		}
		return true;
	}

	checkMoveV(length, row, col) {
		let x = 0;
		while (x < length) {
			if (this.boardArray[row + x][col] === '') {
			} else {
				return false;
			}
			x += 1;
		}
		return true;
	}

	fireAt(row, col) {
		if (this.gameStatus === true) {
			if (this.boardArray[row][col] === 'o') {
				this.boardArray[row][col] = 'x';
			} else if (this.boardArray[row][col] === '') {
				this.boardArray[row][col] = 'm';
			}
			this.checkWin();
		}
	}

	checkWin() {
		for (const row of this.boardArray) {
			for (const spot of row) {
				if (spot === 'o') {
					return;
				}
			}
		}
		console.log('Game Over!');
		this.gameStatus = false;
	}

	resetBoard() {
		this.boardArray = [
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
			['', '', '', '', '', ''],
		];
	}
}

export { GameBoard };
