function createRowP1(game) {
	let x = 0;
	let row = document.createElement('div');

	while (x < 6) {
		let column = document.createElement('div');
		column.setAttribute('class', `column${x}`);

		column.addEventListener('click', () => {
			let col = column.className.slice(-1);
			let row = column.parentNode.className.slice(-1);
			game.addShipsP1(row, col, 'v');
			displayShipsP1(game);
		});

		row.appendChild(column);
		x += 1;
	}
	return row;
}

function createRowP2(game) {
	let x = 0;
	let row = document.createElement('div');

	while (x < 6) {
		let column = document.createElement('div');
		column.setAttribute('class', `column${x}`);

		column.addEventListener('click', () => {
			let col = column.className.slice(-1);
			let row = column.parentNode.className.slice(-1);
			game.addShipsP2(row, col, 'v');
			displayShipsP2(game);
		});

		row.appendChild(column);
		x += 1;
	}
	return row;
}

function createBoardDisplay(game, board) {
	let x = 0;

	if (board === 'boardDisplay1') {
		while (x < 6) {
			let row = createRowP1(game);
			row.setAttribute('class', `row${x}`);
			document.querySelector(`#${board}`).appendChild(row);
			x += 1;
		}
	}

	if (board === 'boardDisplay2') {
		while (x < 6) {
			let row = createRowP2(game);
			row.setAttribute('class', `row${x}`);
			document.querySelector(`#${board}`).appendChild(row);
			x += 1;
		}
	}
}

function displayShipsP1(game) {
	let x = 0;
	let y = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
			let spots = document.querySelectorAll(`#boardDisplay1 .row${x} .column${y}`);
			for (const spot of spots) {
				spot.innerText = game.player1Board.boardArray[x][y];
			}
			y += 1;
		}
		x += 1;
	}
}

function displayShipsP2(game) {
	let x = 0;
	let y = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
			let spots = document.querySelectorAll(`#boardDisplay2 .row${x} .column${y}`);
			for (const spot of spots) {
				spot.innerText = game.player2Board.boardArray[x][y];
			}
			y += 1;
		}
		x += 1;
	}
}

export { createBoardDisplay };
