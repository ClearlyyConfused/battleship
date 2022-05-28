import { Game } from './gameLogic';
import { displayShips } from './functionsPlayer';
import { createBoard, removeBoard } from './createBoard';
import { addShipsAI } from './functionsAI';
import {
	displayPlacementPhase,
	hideGameOver,
	displayCurrentShip,
	displayNumOfShips,
} from './webpageDisplay';

document.querySelector('#resetGame').addEventListener('click', () => {
	setUpGame(game);
	hideGameOver();
});

document.querySelector('#displayShipsAI').addEventListener('click', () => {
	displayShips(1, game.player2Board.boardArray, true);
});

function setUpGame(game) {
	game.startGame(prompt);
	removeBoard();
	createBoard(game, 'boardDisplay1');
	displayPlacementPhase();
	displayCurrentShip(game);
	displayNumOfShips([0, 0]);
}

let game = new Game();
setUpGame(game);

export { setUpGame };
