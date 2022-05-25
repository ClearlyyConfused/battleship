import { Game } from './gameLogic';
import { createBoardDisplay, fireAtP1, fireAtP2 } from './gameDisplay';

const game = new Game();

document.querySelector('#startGame').addEventListener('click', () => {
	game.startGame(prompt);
	createBoardDisplay(game, 'boardDisplay1');
	createBoardDisplay(game, 'boardDisplay2');
});

document.querySelector('#fireAt').addEventListener('click', () => {
	fireAtP1(game);
	fireAtP2(game);
});
