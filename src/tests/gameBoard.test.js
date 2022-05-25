import { GameBoard } from '../gameBoardLogic';

test('Able to add ships on game board using cords (row, col)', () => {
	let gameboard = new GameBoard();

	gameboard.addShip(4, 0, 0, 'h');
	expect(gameboard.boardArray).toEqual([
		['o', 'o', 'o', 'o', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	gameboard.addShip(3, 3, 2, 'v');
	expect(gameboard.boardArray).toEqual([
		['o', 'o', 'o', 'o', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'o', '', '', ''],
		['', '', 'o', '', '', ''],
		['', '', 'o', '', '', ''],
	]);

	gameboard.addShip(2, 4, 5, 'v');
	expect(gameboard.boardArray).toEqual([
		['o', 'o', 'o', 'o', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'o', '', '', ''],
		['', '', 'o', '', '', 'o'],
		['', '', 'o', '', '', 'o'],
	]);
});

test('Adding a ship on an already occupied space leads to an error', () => {
	let gameboard = new GameBoard();

	gameboard.addShip(4, 1, 0, 'h');
	expect(() => {
		gameboard.addShip(4, 1, 3, 'v');
	}).toThrow();
});

test('Able to choose spots on the board to fire at', () => {
	let gameboard = new GameBoard();

	gameboard.addShip(4, 0, 0, 'h');
	gameboard.fireAt(0, 0);
	gameboard.fireAt(1, 1);

	expect(gameboard.boardArray).toEqual([
		['x', 'o', 'o', 'o', '', ''],
		['', 'm', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);
});

test('Game over returns when there are no longer any ships on the board', () => {
	let gameboard = new GameBoard();

	gameboard.addShip(3, 0, 0, 'h');
	expect(gameboard.gameStatus).toBe(true);
	gameboard.fireAt(0, 0);
	gameboard.fireAt(0, 1);
	expect(gameboard.gameStatus).toBe(true);
	gameboard.fireAt(0, 2);
	expect(gameboard.gameStatus).toBe(false);
});

test('Resetting the board returns an empty board', () => {
	let gameboard = new GameBoard();

	gameboard.addShip(3, 0, 0, 'v');
	expect(gameboard.boardArray).toEqual([
		['o', '', '', '', '', ''],
		['o', '', '', '', '', ''],
		['o', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	gameboard.resetBoard();
	expect(gameboard.boardArray).toEqual([
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);
});
