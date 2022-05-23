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
}

export { GameBoard };
