import { displayFirePhase, displayNumOfShips } from '../displayJS/webpageDisplay';
import { fireAt } from './functionsPlayer';

function displayShips(player, playerBoard, showAI = false) {
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
						spot.style.backgroundColor = '#FF1654';
					}
					if (playerBoard[x][y] === 'm') {
						spot.innerText = '';
						spot.style.backgroundColor = '#4D5382';
					}
				} else if (player === 1) {
					if (playerBoard[x][y] !== 'o') {
						spot.innerText = playerBoard[x][y];
					}
					if (showAI === true) {
						spot.innerText = playerBoard[x][y];
					}
					if (playerBoard[x][y] === 'x') {
						spot.style.backgroundColor = '#5EFC8D';
					}
					if (playerBoard[x][y] === 'm') {
						spot.innerText = '';
						spot.style.backgroundColor = '#4D5382';
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
	displayFirePhase();
	let spots;
	let x = 0;
	let y = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
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

function countShips(game) {
	let x = 0;
	let y = 0;
	let playerCount = 0;
	let AIcount = 0;

	while (x < 6) {
		y = 0;
		while (y < 6) {
			if (game.player1Board.boardArray[x][y] === 'o') {
				playerCount += 1;
			}
			if (game.player2Board.boardArray[x][y] === 'o') {
				AIcount += 1;
			}
			y += 1;
		}
		x += 1;
	}

	displayNumOfShips([playerCount, AIcount]);
}

export { displayShips, beginFireMode, countShips };
