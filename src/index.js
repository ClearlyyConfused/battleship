import { Game } from './gameLogic';
import { createBoardDisplay, fireAt, removeDisplay } from './gameDisplay';

let game = new Game();

document.querySelector('#startGame').addEventListener('click', () => {
	game.startGame(prompt);
	removeDisplay();
	createBoardDisplay(game, 'boardDisplay1');
	createBoardDisplay(game, 'boardDisplay2');
});

document.querySelector('#fireAt').addEventListener('click', () => {
	fireAt(game);
});
