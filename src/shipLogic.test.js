import { Ship } from './shipLogic';

test('Create 2 ships one with length 7 and one with length 14', () => {
	let ship1 = new Ship(7);
	let ship2 = new Ship(14);
	expect(ship1.shipArray.length).toBe(7);
	expect(ship2.shipArray.length).toBe(14);
});

test('Have ship array element be x if hit', () => {
	let ship = new Ship(3);
	expect(ship.shipArray).toEqual(['', '', '']);
	ship.hitShip(0);
	expect(ship.shipArray).toEqual(['x', '', '']);
	ship.hitShip(2);
	expect(ship.shipArray).toEqual(['x', '', 'x']);
});

test('Have ship sink be true if all spots are x', () => {
	let ship = new Ship(2);
	expect(ship.shipSunk).toBe(false);
	ship.hitShip(0);
	expect(ship.shipSunk).toBe(false);
	ship.hitShip(1);
	expect(ship.shipArray).toEqual(['x', 'x']);
	expect(ship.shipSunk).toBe(true);
});
