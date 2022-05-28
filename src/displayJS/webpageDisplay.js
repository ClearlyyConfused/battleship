import { setUpGame } from '../index';

function createCurrentShipDisplay(game) {
	const display = document.querySelector('#boardDisplay2');
	const currentShipIcon = document.createElement('div');
	const description = document.createElement('div');

	display.innerHTML = '';
	display.appendChild(description);
	display.appendChild(currentShipIcon);

	currentShipIcon.setAttribute('id', 'currentShipDisplay');
	description.setAttribute('id', 'shipDisplayDescription');

	displayCurrentShipInfo(game, currentShipIcon, description);
}

function displayCurrentShipInfo(game, currentShipIcon, description) {
	if (game.ship1[0] === false) {
		description.innerText = 'Current Ship Size (2)';
		currentShipIcon.innerText = 'oo';
	} else if (game.ship2[0] === false) {
		description.innerText = 'Current Ship Size (3)';
		currentShipIcon.innerText = 'ooo';
	} else if (game.ship3[0] === false) {
		description.innerText = 'Current Ship Size (4)';
		currentShipIcon.innerText = 'oooo';
	} else {
		description.innerText = 'Current Ship Size (5)';
		currentShipIcon.innerText = 'ooooo';
	}
}

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
	const gameOverScreen = document.querySelector('#gameOver');
	gameOverScreen.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';

	if (game.player1Board.gameStatus === false) {
		gameOverScreen.innerText = 'Game Over! AI wins!';
	}
	if (game.player2Board.gameStatus === false) {
		gameOverScreen.innerText = 'Game Over! User wins!';
	}

	gameOverScreen.appendChild(createPlayAgainBTN(game));
}

function hideGameOver() {
	const gameOver = document.querySelector('#gameOver');
	gameOver.innerHTML = '';
	gameOver.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}

function createPlayAgainBTN(game) {
	const playAgain = document.createElement('button');
	playAgain.innerText = 'Play Again!';

	playAgain.addEventListener('click', () => {
		setUpGame(game);
		hideGameOver();
	});

	return playAgain;
}

function displayNumOfShips(numOfShips) {
	document.querySelector('#playerShipAmount').innerText = numOfShips[0];
	document.querySelector('#AIShipAmount').innerText = numOfShips[1];
}

export {
	displayPlacementPhase,
	displayFirePhase,
	displayGameOver,
	hideGameOver,
	createCurrentShipDisplay,
	displayNumOfShips,
};
