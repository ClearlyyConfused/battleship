import { Game } from './gameLogic';
import { beginFireMode, displayShips } from './functionsPlayer';
import { createBoard, removeBoard } from './createBoard';
import { addShipsAI } from './functionsAI';

document.querySelector('#resetGame').addEventListener('click', () => {
	setUpGame(game);
});

document.querySelector('#fireAt').addEventListener('click', () => {
	beginFireMode(game);
});

document.querySelector('#displayShipsAI').addEventListener('click', () => {
	displayShips(1, game.player2Board.boardArray, true);
});

let game = new Game();
function setUpGame(game) {
	game.startGame(prompt);
	removeBoard();
	createBoard(game, 'boardDisplay1');
	createBoard(game, 'boardDisplay2');
	addShipsAI(game);
}
setUpGame(game);
