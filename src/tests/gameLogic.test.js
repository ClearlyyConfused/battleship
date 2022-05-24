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

test('Resetting a game returns 2 empty boards', () => {
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

	game.resetGame();

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

test('Game will add ships at the correct spots in the correct game board', () => {
	const game = new Game();
	let x = 0;
	let row = '0';
	let col = '0';
	let orientation = 'v';

	game.player1Board.addShip(x + 3, row, col, orientation);

	expect(game.player1Board.boardArray).toEqual([
		['o', '', '', '', '', ''],
		['o', '', '', '', '', ''],
		['o', '', '', '', '', ''],
		['', '', '', '', '', ''],
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

test('playRound does not trigger if game is over, but will if a new game is started', () => {
	const game = new Game();
	const prompt = function () {};
	game.player1Board.fireAt = function () {};

	game.player2Board.boardArray = [
		['', '', 'o', 'x', 'x', ''],
		['', '', '', '', '', ''],
		['', '', '', 'x', '', ''],
		['', '', '', 'x', '', ''],
		['', '', '', 'x', '', ''],
		['', 'x', 'x', 'x', '', ''],
	];

	game.player2Board.fireAt('0', '2');
	expect(game.playRound(prompt)).toBe('Game is Over');
	game.startGame(prompt);
	expect(game.playRound(prompt)).toBe('Round is played');
});
