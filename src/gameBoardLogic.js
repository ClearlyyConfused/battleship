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

		if (orientation === 'h') {
			let x = 0;
			while (x < length) {
				if (this.boardArray[row][col + x] === '') {
				} else {
					return 'Error, cannot place here!';
				}
				x += 1;
			}

			x = 0;
			while (x < length) {
				this.boardArray[row][col + x] = 'o';
				x += 1;
			}
		}
		if (orientation === 'v') {
			let x = 0;
			while (x < length) {
				if (this.boardArray[row + x][col] === '') {
				} else {
					return 'Error, cannot place here!';
				}
				x += 1;
			}

			x = 0;
			while (x < length) {
				this.boardArray[row + x][col] = 'o';
				x += 1;
			}
		}
	}

	fireAt(row, col) {
		if (this.boardArray[row][col] === 'o') {
			this.boardArray[row][col] = 'x';
		} else if (this.boardArray[row][col] === '') {
			this.boardArray[row][col] = 'm';
		}
		this.checkWin();
	}

	checkWin() {
		for (const row of this.boardArray) {
			for (const spot of row) {
				if (spot === 'o') {
					return;
				}
			}
		}
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
