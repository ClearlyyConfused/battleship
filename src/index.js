import { Game } from './classesJS/gameClass';
import { displayShips } from './functionsJS/functionsGeneral';
import {
	createBoardDisplay,
	removeBoardDisplay,
} from './displayJS/createBoardDisplay';
import {
	displayPlacementPhase,
	hideGameOver,
	createCurrentShipDisplay,
	displayNumOfShips,
} from './displayJS/webpageDisplay';

const game = new Game();
setUpGame(game);

document.querySelector('#resetGame').addEventListener('click', () => {
	setUpGame(game);
	hideGameOver();
});

document.querySelector('#displayShipsAI').addEventListener('click', () => {
	displayShips(1, game.player2Board.boardArray, true);
});

function setUpGame(game) {
	game.startGame(prompt);
	removeBoardDisplay();
	createBoardDisplay(game, 'boardDisplay1');
	displayPlacementPhase();
	createCurrentShipDisplay(game);
	displayNumOfShips([0, 0]);
}

export { setUpGame };
