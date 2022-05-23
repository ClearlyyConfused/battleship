import { Ship } from './shipLogic';

const ship1 = new Ship(2);
ship1.hitShip(0);
console.log(ship1.shipArray);
console.log(ship1.shipSunk);
ship1.hitShip(1);
console.log(ship1.shipArray);
console.log(ship1.shipSunk);
