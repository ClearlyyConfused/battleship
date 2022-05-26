function createBoardDisplay(game, board) {
	let x = 0;

	while (x < 6) {
		let row = assignRow(game, board);
		row.setAttribute('class', `row${x}`);
		document.querySelector(`#${board}`).appendChild(row);
		x += 1;
	}
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
		addShipsV(game, player, playerBoard, column);
	});
	column.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		addShipsH(game, player, playerBoard, column);
	});
	return column;
}

function removeDisplay() {
	document.querySelector('#boardDisplay1 ').innerHTML = '';
	document.querySelector('#boardDisplay2 ').innerHTML = '';
}

function addShipsV(game, player, playerBoard, column) {
	if (game.fireMode === false) {
		let col = column.className.slice(-1);
		let row = column.parentNode.className.slice(-1);
		game.addShips(row, col, 'v', player);
		displayShips(player, playerBoard);
	}
}

function addShipsH(game, player, playerBoard, column) {
	if (game.fireMode === false) {
		let col = column.className.slice(-1);
		let row = column.parentNode.className.slice(-1);
		game.addShips(row, col, 'h', player);
		displayShips(player, playerBoard);
	}
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
				spot.innerText = '';
				if (player === 0) {
					spot.innerText = playerBoard[x][y];
					if (playerBoard[x][y] === 'x') {
						spot.style.backgroundColor = 'red';
					}
				} else if (player === 1) {
					if (playerBoard[x][y] !== 'o') {
						spot.innerText = playerBoard[x][y];
					}
					if (playerBoard[x][y] === 'x') {
						spot.style.backgroundColor = 'green';
					}
				}
			}
			y += 1;
		}
		x += 1;
	}
}

function beginFireMode(game) {
	game.fireMode = true;
	let spots;
	let x = 0;
	let y = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
			spots = document.querySelectorAll(`#boardDisplay1 .row${x} .column${y}`);
			assignFireAt(spots, game, game.player1Board, x, y, 0);

			spots = document.querySelectorAll(`#boardDisplay2 .row${x} .column${y}`);
			assignFireAt(spots, game, game.player2Board, x, y, 1);

			y += 1;
		}
		x += 1;
	}
}

function assignFireAt(spots, game, playerBoard, x, y, player) {
	for (const spot of spots) {
		spot.addEventListener('click', () => {
			fireAt(game, playerBoard, x, y, player);
		});
	}
}

function fireAt(game, board, px, py, player) {
	if (
		game.player1Board.gameStatus === true &&
		game.player2Board.gameStatus === true
	) {
		board.fireAt(px, py);
		displayShips(player, board.boardArray);
		enemyFireAt(game);
	}
}

function enemyFireAt(game) {
	console.log('---------');
	try {
		if (
			game.player1Board.gameStatus === true &&
			game.player2Board.gameStatus === true
		) {
			const randomNum = Math.floor(Math.random() * 11);

			if (randomNum > 5) {
				let x = 0;
				while (x < 6) {
					let y = 0;

					while (y < 6) {
						if (game.player1Board.boardArray[x][y] === 'o') {
							if (enemyFireAtSmart(game, x, y) === 'success') {
								return;
							} else {
								y += 1;
								continue;
							}
						}
						y += 1;
					}
					x += 1;
					if (x === 6) {
						x = 0;
					}
				}
			}

			console.log('Random shot');
			let xe = Math.floor(Math.random() * (5 - 0 + 1) + 0);
			let ye = Math.floor(Math.random() * (5 - 0 + 1) + 0);
			game.player1Board.fireAt(xe, ye);
			displayShips(0, game.player1Board.boardArray);
		}
	} catch (error) {
		enemyFireAt(game);
	}
}

function enemyFireAtSmart(game, x, y) {
	const randomNum = Math.floor(Math.random() * 101);

	if (randomNum <= 5) {
		game.player1Board.fireAt(x, y);
		displayShips(0, game.player1Board.boardArray);
		return 'success';
	} else {
		return 'failure';
	}
}

export { createBoardDisplay, beginFireMode, removeDisplay, displayShips };
