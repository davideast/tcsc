/// <reference path="../helpers/helpers.ts" />

module tcsc {
	export function binarySearch(array: Array<number>, target: number): number {
		var min: number = 0;
		var max: number = array.length - 1;
		var guess: number;
		var guessValue: number;

		while(max >= min) {
			// Get the middle index of the array
			guess = helpers.roundedAverage([max, min]);
			guessValue = array[guess];

			if(guessValue === target) {
				// if the guess is equal to the target then return the index
				return guess;
			} else if(guessValue > target) {
				// if the guess is greater than the target then decrease the max range by one
				max = guess - 1;
			} else if(guessValue < target) {
				// if the guess is less than the target increase the min range by one
				min = guess + 1;
			}

		}

		return -1;
	}
}
