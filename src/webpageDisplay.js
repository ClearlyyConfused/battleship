import { setUpGame } from './index';

function displayCurrentShip(game) {
	const display = document.querySelector('#boardDisplay2');
	display.innerHTML = '';
	const ship = document.createElement('div');
	ship.setAttribute('id', 'currentShipDisplay');
	const description = document.createElement('div');
	description.setAttribute('id', 'shipDisplayDescription');

	if (game.ship1[0] === false) {
		description.innerText = 'Current Ship Size (2)';
		ship.innerText = 'oo';
	} else if (game.ship2[0] === false) {
		description.innerText = 'Current Ship Size (3)';
		ship.innerText = 'ooo';
	} else if (game.ship3[0] === false) {
		description.innerText = 'Current Ship Size (4)';
		ship.innerText = 'oooo';
	} else if (game.ship4[0] === false) {
		description.innerText = 'Current Ship Size (5)';
		ship.innerText = 'ooooo';
	}

	display.appendChild(description);
	display.appendChild(ship);
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

export {
	displayPlacementPhase,
	displayFirePhase,
	displayGameOver,
	hideGameOver,
	displayCurrentShip,
};
