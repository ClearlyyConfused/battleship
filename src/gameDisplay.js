function createRow() {
	let x = 0;
	let row = document.createElement('div');

	while (x < 6) {
		let column = document.createElement('div');
		column.setAttribute('class', `column${x}`);
		row.appendChild(column);
		x += 1;
	}
	return row;
}

function createBoardDisplay(board) {
	let x = 0;

	while (x < 6) {
		let row = createRow();
		row.setAttribute('class', `row${x}`);
		document.querySelector(`#${board}`).appendChild(row);
		x += 1;
	}
}

export { createBoardDisplay };
