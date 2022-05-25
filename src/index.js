import { Game } from './gameLogic';
import { createBoardDisplay, beginFireMode, removeDisplay } from './gameDisplay';
import { createBoardDisplayAI } from './functionsAI';
import { displayShipsAI } from './functionsAI';

let game = new Game();

document.querySelector('#startGame').addEventListener('click', () => {
	game.startGame(prompt);
	removeDisplay();
	createBoardDisplay(game, 'boardDisplay1');
	createBoardDisplayAI(game, 'boardDisplay2');
});

document.querySelector('#fireAt').addEventListener('click', () => {
	beginFireMode(game);
});

document.querySelector('#displayShipsAI').addEventListener('click', () => {
	displayShipsAI(1, game.player2Board.boardArray);
});
