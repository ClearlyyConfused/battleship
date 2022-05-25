import { displayShips } from './gameDisplay';

function createBoardDisplayAI(game, board) {
	let x = 0;

	while (x < 6) {
		let row = assignRowAI(game, board);
		row.setAttribute('class', `row${x}`);
		document.querySelector(`#${board}`).appendChild(row);
		x += 1;
	}

	addShipsAI(game, 1, game.player2Board.boardArray);
	addShipsAI(game, 1, game.player2Board.boardArray);
	addShipsAI(game, 1, game.player2Board.boardArray);
}

function assignRowAI(game, board) {
	if (board === 'boardDisplay1') {
		return createRowAI(game, 0, game.player1Board.boardArray);
	} else if (board === 'boardDisplay2') {
		return createRowAI(game, 1, game.player2Board.boardArray);
	}
}

function createRowAI(game, player, playerBoard) {
	let columnNum = 0;
	let row = document.createElement('div');

	while (columnNum < 6) {
		let column = createColumnAI(game, player, playerBoard, columnNum);
		row.appendChild(column);
		columnNum += 1;
	}
	return row;
}

function createColumnAI(game, player, playerBoard, columnNum) {
	let column = document.createElement('div');
	column.setAttribute('class', `column${columnNum}`);

	return column;
}

function addShipsAI(game, player, playerBoard) {
	let orientation = Math.floor(Math.random() * (1 - 0 + 1) + 0);
	if (orientation === 0) {
		orientation = 'v';
	} else if (orientation === 1) {
		orientation = 'h';
	}

	try {
		let col = Math.floor(Math.random() * (5 - 0 + 1) + 0);
		let row = Math.floor(Math.random() * (5 - 0 + 1) + 0);
		game.addShips(row, col, orientation, player);
		displayShips(player, playerBoard);
	} catch (error) {
		console.log(`Error: ${error}`);
		addShipsAI(game, player, playerBoard);
	}
}

function displayShipsAI(player, playerBoard) {
	let x = 0;
	let y = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
			let spots = document.querySelectorAll(
				`#boardDisplay${player + 1} .row${x} .column${y}`
			);
			for (const spot of spots) {
				spot.innerText = playerBoard[x][y];
			}
			y += 1;
		}
		x += 1;
	}
}

export { createBoardDisplayAI, displayShipsAI };
