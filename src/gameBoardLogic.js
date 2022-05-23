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
	}

	occupySpot(row, col) {
		this.boardArray[row][col] = 'x';
	}

	addShipH(length, row, col) {
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
			this.boardArray[row][col + x] = 'x';
			x += 1;
		}
	}

	addShipV(length, row, col) {
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
			this.boardArray[row + x][col] = 'x';
			x += 1;
		}
	}
}

export { GameBoard };
