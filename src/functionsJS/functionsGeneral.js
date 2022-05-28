import { displayFirePhase } from '../displayJS/webpageDisplay';
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
						spot.style.backgroundColor = 'red';
					}
					if (playerBoard[x][y] === 'm') {
						spot.style.backgroundColor = 'lightblue';
					}
				} else if (player === 1) {
					if (playerBoard[x][y] !== 'o') {
						spot.innerText = playerBoard[x][y];
					}
					if (showAI === true) {
						spot.innerText = playerBoard[x][y];
					}
					if (playerBoard[x][y] === 'x') {
						spot.style.backgroundColor = 'green';
					}
					if (playerBoard[x][y] === 'm') {
						spot.style.backgroundColor = 'lightblue';
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

export { displayShips, beginFireMode };
