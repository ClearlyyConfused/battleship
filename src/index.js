import { Game } from './gameLogic';
import { beginFireMode, displayShips } from './functionsPlayer';
import { createBoard, removeBoard } from './createBoard';
import { addShipsAI } from './functionsAI';
import { placementPhase, firePhase } from './webpageDisplay';

document.querySelector('#resetGame').addEventListener('click', () => {
	setUpGame(game);
});

document.querySelector('#fireAt').addEventListener('click', () => {
	beginFireMode(game);
	firePhase();
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
	placementPhase();
}

let game = new Game();
setUpGame(game);
