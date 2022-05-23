import { GameBoard } from './gameBoardLogic';

test('Able to occupy spots on game board using cords (row, col)', () => {
	let gameboard = new GameBoard();
	expect(gameboard.boardArray).toEqual([
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	gameboard.occupySpot(0, 0);
	expect(gameboard.boardArray).toEqual([
		['x', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	gameboard.occupySpot(2, 2);
	expect(gameboard.boardArray).toEqual([
		['x', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'x', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	gameboard.occupySpot(5, 4);
	expect(gameboard.boardArray).toEqual([
		['x', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'x', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', 'x', ''],
	]);
});
