class Ship {
	constructor(length) {
		this.shipArray = this.createShipArray(length);
		this.shipSunk = false;
	}

	createShipArray(length) {
		let x = 0;
		let shipArray = [];
		while (x < length) {
			shipArray.push('');
			x += 1;
		}
		return shipArray;
	}

	hitShip(location) {
		this.shipArray[location] = 'x';
		this.checkShipSunk();
	}

	checkShipSunk() {
		for (const part of this.shipArray) {
			if (part === '') {
				return;
			}
		}
		this.shipSunk = true;
	}
}

export { Ship };
