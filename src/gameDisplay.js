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

export { createBoardDisplay };
