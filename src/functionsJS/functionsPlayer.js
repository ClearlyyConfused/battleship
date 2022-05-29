import { AIFireAt, addShipsAI } from './functionsAI';
import { displayGameOver } from '../displayJS/webpageDisplay';
import { createBoardDisplay } from '../displayJS/createBoardDisplay';
import { createCurrentShipDisplay } from '../displayJS/webpageDisplay';
import { displayShips, beginFireMode, countShips } from './functionsGeneral';

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

export { addShipPlayer, fireAt };
