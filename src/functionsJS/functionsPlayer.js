import { AIFireAt, addShipsAI } from './functionsAI';
import { displayGameOver } from '../displayJS/webpageDisplay';
import { createBoardDisplay } from '../displayJS/createBoardDisplay';
import {
	createCurrentShipDisplay,
	displayNumOfShips,
} from '../displayJS/webpageDisplay';
import { displayShips, beginFireMode } from './functionsGeneral';

function addShipPlayer(game, player, playerBoard, column, orientation) {
	let x = 0;
	if (game.fireMode === false) {
		let col = column.className.slice(-1);
		let row = column.parentNode.className.slice(-1);
		if (game.addShips(row, col, orientation, player) === 'beginFirePhase') {
			document.querySelector('#boardDisplay2').innerHTML = '';
			createBoardDisplay(game, 'boardDisplay2');
			addShipsAI(game);
			beginFireMode(game);
			x = 1;
		}
		if (x === 0) {
			createCurrentShipDisplay(game);
		}
		displayShips(player, playerBoard);
	}
	countShips(game);
}

function fireAt(game, board, px, py, player) {
	if (game.checkGameStatus()) {
		board.fireAt(px, py);
		displayShips(player, board.boardArray);
		AIFireAt(game);
	}

	countShips(game);
	if (game.checkGameStatus() === false) {
		displayGameOver(game);
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

export { addShipPlayer, fireAt };
