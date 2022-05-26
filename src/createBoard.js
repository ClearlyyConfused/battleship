import { addShipPlayer } from './functionsPlayer';

function createBoard(game, board) {
	let x = 0;

	while (x < 6) {
		let row = assignRow(game, board);
		row.setAttribute('class', `row${x}`);
		document.querySelector(`#${board}`).appendChild(row);
		x += 1;
	}
}

function removeBoard() {
	document.querySelector('#boardDisplay1 ').innerHTML = '';
	document.querySelector('#boardDisplay2 ').innerHTML = '';
}

function assignRow(game, board) {
	if (board === 'boardDisplay1') {
		return createRow(game, 0, game.player1Board.boardArray);
	} else if (board === 'boardDisplay2') {
		return createRow(game, 1, game.player2Board.boardArray);
	}
}

function createRow(game, player, playerBoard) {
	let columnNum = 0;
	let row = document.createElement('div');

	while (columnNum < 6) {
		let column = createColumn(game, player, playerBoard, columnNum);
		row.appendChild(column);
		columnNum += 1;
	}
	return row;
}

function createColumn(game, player, playerBoard, columnNum) {
	let column = document.createElement('div');
	column.setAttribute('class', `column${columnNum}`);
	column.addEventListener('click', () => {
		addShipPlayer(game, player, playerBoard, column, 'v');
	});
	column.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		addShipPlayer(game, player, playerBoard, column, 'h');
	});

	return column;
}

export { createBoard, removeBoard };
