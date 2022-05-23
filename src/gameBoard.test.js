import { GameBoard } from './gameBoardLogic';

test('Able to add ships on game board using cords (row, col)', () => {
	let gameboard = new GameBoard();

	gameboard.addShipH(4, 0, 0);
	expect(gameboard.boardArray).toEqual([
		['x', 'x', 'x', 'x', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	gameboard.addShipV(3, 3, 2);
	expect(gameboard.boardArray).toEqual([
		['x', 'x', 'x', 'x', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'x', '', '', ''],
		['', '', 'x', '', '', ''],
		['', '', 'x', '', '', ''],
	]);

	gameboard.addShipV(2, 4, 5);
	expect(gameboard.boardArray).toEqual([
		['x', 'x', 'x', 'x', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'x', '', '', ''],
		['', '', 'x', '', '', 'x'],
		['', '', 'x', '', '', 'x'],
	]);
});

test('Adding a ship on an already occupied space leads to an error', () => {
	let gameboard = new GameBoard();

	gameboard.addShipH(4, 1, 0);
	expect(gameboard.addShipV(4, 1, 3)).toBe('Error, cannot place here!');
});
