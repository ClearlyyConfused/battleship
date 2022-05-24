import { Game } from './gameLogic';

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

	game.player1Board.fireAt(0, 1);
	expect(game.player1Board.boardArray).toEqual([
		['', 'x', '', '', '', ''],
		['', 'o', '', '', '', ''],
		['', 'o', '', 'o', 'o', 'o'],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'o', 'o', 'o', 'o'],
	]);

	game.player2Board.fireAt(0, 0);
	expect(game.player2Board.boardArray).toEqual([
		['m', '', 'o', 'o', 'o', ''],
		['', '', '', '', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', '', '', 'o', '', ''],
		['', 'o', 'o', 'o', '', ''],
	]);
});

test('Game state will not prompt for user input if game is over', () => {
	const game = new Game();

	game.player1Board.boardArray = [
		['', 'x', '', '', '', ''],
		['', 'x', '', '', '', ''],
		['', 'x', '', 'x', 'x', 'x'],
		['', '', '', '', '', ''],
		['', '', '', '', '', ''],
		['', '', 'x', 'x', 'x', 'x'],
	];
	game.player2Board.boardArray = [
		['', '', 'x', 'x', 'x', ''],
		['', '', '', '', '', ''],
		['', '', '', 'x', '', ''],
		['', '', '', 'x', '', ''],
		['', '', '', 'x', '', ''],
		['', 'x', 'x', 'x', '', ''],
	];

	game.player2Board.checkWin();
	expect(game.player2Board.gameStatus).toBe(false);
});
