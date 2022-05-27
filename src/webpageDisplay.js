function placementPhase() {
	document.querySelector('#gamePhase').innerText = 'Placement Phase';
	document.querySelector('#phaseDescription').innerText =
		'Place your ships using LMB (vertical) and RMB (horizontal)';
}

function firePhase() {
	document.querySelector('#gamePhase').innerText = 'Firing Phase';
	document.querySelector('#phaseDescription').innerText =
		'Attack the enemy board using LMB';
}

export { placementPhase, firePhase };
