import { Game } from '../gameLogic';

test('Creating a new game creates 2 empty boards', () => {
	const game = new Game();

	expect(game.player1Board.boardArray).toEqual([
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	expect(game.player2Board.boardArray).toEqual([
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);
});

test('Starting a new game resets game board statuses', () => {
	const prompt = function () {};

	const game = new Game();
	game.player1Board.gameStatus = false;
	expect(game.player1Board.gameStatus).toBe(false);
	game.startGame(prompt);
	expect(game.player1Board.gameStatus).toBe(true);
});

test('Starting a new game returns 2 empty boards', () => {
	const game = new Game();
	game.player1Board.boardArray = [
		['', 'o', '', '', '', ''],
		['', 'o', '', '', '', ''],
		['', 'o', '', 'x', 'x', 'x'],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'o', 'o', 'o', 'o'],
	];
	game.player2Board.boardArray = [
		['', '', 'x', 'x', 'o', ''],
		['', '', '', '', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', 'o', 'x', 'o', '', ''],
	];

	game.startGame();

	expect(game.player1Board.boardArray).toEqual([
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	expect(game.player2Board.boardArray).toEqual([
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);
});

test('Game will add correct ships at the correct spots in the correct game board', () => {
	const game = new Game();
	let row = '0';
	let col = '0';
	let orientation = 'v';

	game.addShips(row, col, orientation, 0);
	expect(game.player1Board.boardArray).toEqual([
		['o', '', '', '', '', ''],
		['o', '', '', '', '', ''],
		['o', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);

	row = 0;
	col = 1;
	game.addShips(row, col, orientation, 0);
	expect(game.player1Board.boardArray).toEqual([
		['o', 'o', '', '', '', ''],
		['o', 'o', '', '', '', ''],
		['o', 'o', '', '', '', ''],
		['', 'o', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);
});

test('Game will not add a ship if the space is already occupied (vertical)', () => {
	const game = new Game();
	let row = '0';
	let col = '0';
	let orientation = 'v';

	game.addShips(row, col, orientation, 0);
	expect(() => {
		game.addShips(row + 2, col, orientation, 0);
	}).toThrow();
	game.addShips(row, col + 1, orientation, 0);

	expect(game.player1Board.boardArray).toEqual([
		['o', 'o', '', '', '', ''],
		['o', 'o', '', '', '', ''],
		['o', 'o', '', '', '', ''],
		['', 'o', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
	]);
});

test('Game will fire at correct spots in the specified board', () => {
	const game = new Game();
	game.player1Board.boardArray = [
		['', 'o', '', '', '', ''],
		['', 'o', '', '', '', ''],
		['', 'o', '', 'o', 'o', 'o'],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'o', 'o', 'o', 'o'],
	];
	game.player2Board.boardArray = [
		['', '', 'o', 'o', 'o', ''],
		['', '', '', '', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', 'o', 'o', 'o', '', ''],
	];

	let row;
	let col;
	row = '0';
	col = '1';
	game.player1Board.fireAt(row, col);
	expect(game.player1Board.boardArray).toEqual([
		['', 'x', '', '', '', ''],
		['', 'o', '', '', '', ''],
		['', 'o', '', 'o', 'o', 'o'],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'o', 'o', 'o', 'o'],
	]);

	row = '0';
	col = '0';
	game.player2Board.fireAt(row, col);
	expect(game.player2Board.boardArray).toEqual([
		['m', '', 'o', 'o', 'o', ''],
		['', '', '', '', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', 'o', 'o', 'o', '', ''],
	]);
});
