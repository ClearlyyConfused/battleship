function createBoardDisplay(game, board) {
	let x = 0;

	if (board === 'boardDisplay1') {
		while (x < 6) {
			let row = createRow(game, 0, game.player1Board.boardArray);
			row.setAttribute('class', `row${x}`);
			document.querySelector(`#${board}`).appendChild(row);
			x += 1;
		}
	}

	if (board === 'boardDisplay2') {
		while (x < 6) {
			let row = createRow(game, 1, game.player2Board.boardArray);
			row.setAttribute('class', `row${x}`);
			document.querySelector(`#${board}`).appendChild(row);
			x += 1;
		}
	}
}

function createRow(game, player, playerBoard) {
	let x = 0;
	let row = document.createElement('div');

	while (x < 6) {
		let column = document.createElement('div');
		column.setAttribute('class', `column${x}`);

		column.addEventListener('click', () => {
			if (game.fireMode === false) {
				let col = column.className.slice(-1);
				let row = column.parentNode.className.slice(-1);
				game.addShips(row, col, 'v', player);
				displayShips(player, playerBoard);
			}
		});

		row.appendChild(column);
		x += 1;
	}
	return row;
}

function displayShips(player, playerBoard) {
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

function removeDisplay() {
	document.querySelector('#boardDisplay1 ').innerHTML = '';
	document.querySelector('#boardDisplay2 ').innerHTML = '';
}

function fireAt(game) {
	game.fireMode = true;
	let x = 0;
	let y = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
			let spots = document.querySelectorAll(`#boardDisplay1 .row${x} .column${y}`);
			for (const spot of spots) {
				let px = x;
				let py = y;
				spot.addEventListener('click', () => {
					if (
						game.player1Board.gameStatus === true &&
						game.player2Board.gameStatus === true
					) {
						game.player1Board.fireAt(px, py);
						displayShips(0, game.player1Board.boardArray);
					}
				});
			}
			y += 1;
		}
		x += 1;
	}

	x = 0;
	y = 0;
	while (x < 6) {
		y = 0;
		while (y < 6) {
			let spots = document.querySelectorAll(`#boardDisplay2 .row${x} .column${y}`);
			for (const spot of spots) {
				let px = x;
				let py = y;
				spot.addEventListener('click', () => {
					if (
						game.player1Board.gameStatus === true &&
						game.player2Board.gameStatus === true
					) {
						game.player2Board.fireAt(px, py);
						displayShips(1, game.player2Board.boardArray);
					}
				});
			}
			y += 1;
		}
		x += 1;
	}
}

export { createBoardDisplay, fireAt, removeDisplay };
