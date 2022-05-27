import { Game } from './gameLogic';
import { displayShips } from './functionsPlayer';
import { createBoard, removeBoard } from './createBoard';
import { addShipsAI } from './functionsAI';
import { displayPlacementPhase, hideGameOver } from './webpageDisplay';

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
	createBoard(game, 'boardDisplay2');
	addShipsAI(game);
	displayPlacementPhase();
}

let game = new Game();
setUpGame(game);

export { setUpGame };
