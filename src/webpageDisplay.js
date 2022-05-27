import { setUpGame } from './index';

function displayPlacementPhase() {
	document.querySelector('#gamePhase').innerText = 'Placement Phase';
	document.querySelector('#phaseDescription').innerText =
		'Place your ships using LMB (vertical) and RMB (horizontal)';
}

function displayFirePhase() {
	document.querySelector('#gamePhase').innerText = 'Firing Phase';
	document.querySelector('#phaseDescription').innerText =
		'Attack the enemy board using LMB';
}

function displayGameOver(game) {
	const gameOver = document.querySelector('#gameOver');
	gameOver.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';

	if (game.player1Board.gameStatus === false) {
		gameOver.innerText = 'Game Over! AI wins!';
	}
	if (game.player2Board.gameStatus === false) {
		gameOver.innerText = 'Game Over! User wins!';
	}

	const playAgain = document.createElement('button');
	gameOver.appendChild(playAgain);
	playAgain.innerText = 'Play Again!';

	playAgain.addEventListener('click', () => {
		setUpGame(game);
		hideGameOver();
	});
}

function hideGameOver() {
	const gameOver = document.querySelector('#gameOver');
	gameOver.innerHTML = '';
	gameOver.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

export { displayPlacementPhase, displayFirePhase, displayGameOver, hideGameOver };
