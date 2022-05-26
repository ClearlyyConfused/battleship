import { displayShips } from './functionsPlayer';

function addShipsAI(game) {
	createShipAI(game, 1, game.player2Board.boardArray);
	createShipAI(game, 1, game.player2Board.boardArray);
	createShipAI(game, 1, game.player2Board.boardArray);
}

function createShipAI(game, player, playerBoard) {
	try {
		let orientation = generateRandomOrientation();
		let col = Math.floor(Math.random() * 6);
		let row = Math.floor(Math.random() * 6);
		game.addShips(row, col, orientation, player);
		displayShips(player, playerBoard);
	} catch (error) {
		addShipsAI(game, player, playerBoard);
	}
}

function generateRandomOrientation() {
	let orientation = Math.floor(Math.random() * 2);
	if (orientation === 0) {
		return 'v';
	} else if (orientation === 1) {
		return 'h';
	}
}

function AIFireAt(game) {
	try {
		if (game.checkGameStatus()) {
			if (difficultyLevel(1) > 5) {
				fireSpecific(game);
			} else {
				fireRandom(game);
			}
		}
	} catch (error) {
		AIFireAt(game);
	}
}

function difficultyLevel(difficulty) {
	if (difficulty === 0) {
		return Math.floor(Math.random() * 6);
	}
	if (difficulty === 1) {
		return Math.floor(Math.random() * 9);
	}
	if (difficulty === 2) {
		return Math.floor(Math.random() * 14);
	}
}

function fireSpecific(game) {
	let x = 0;
	while (x < 6) {
		let y = 0;

		while (y < 6) {
			if (game.player1Board.boardArray[x][y] === 'o') {
				if (selectShip() === 'chosen') {
					game.player1Board.fireAt(x, y);
					displayShips(0, game.player1Board.boardArray);
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

function fireRandom(game) {
	let x = Math.floor(Math.random() * 6);
	let y = Math.floor(Math.random() * 6);
	game.player1Board.fireAt(x, y);
	displayShips(0, game.player1Board.boardArray);
}

function selectShip() {
	const randomNum = Math.floor(Math.random() * 101);
	if (randomNum <= 5) {
		return 'chosen';
	} else {
		return 'not chosen';
	}
}

export { AIFireAt, addShipsAI };
