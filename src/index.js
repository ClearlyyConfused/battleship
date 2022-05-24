import { Game } from './gameLogic';
import { createBoardDisplay } from './gameDisplay';

const game = new Game();

document.querySelector('#startGame').addEventListener('click', () => {
	game.startGame(prompt);
});

createBoardDisplay('boardDisplay1');
createBoardDisplay('boardDisplay2');

document.querySelector('#fireAt').addEventListener('click', () => {
	game.playRound(prompt);
});
