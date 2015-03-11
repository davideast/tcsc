import helpers = require('./../helpers/helpers');

export function binarySearch(array: Array<number>, target: number): number {
	var min: number = 0;
	var max: number = array.length;
	var guess: number;

	while(max > min) {
		guess = helpers.average([max, min]);
	}

	return -1;
}
