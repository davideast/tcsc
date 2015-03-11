
module helpers {

	export function average(params: Array<number>): number {
		var sum: number = 0;

		// Validate the type is an array
		if(!Array.isArray(params)) {
			throw new Error("Parameter must be an array.");
		}

		// reduce all values to a their sum
		sum = params.reduce((a, b) => a + b);

		// return the average
		return sum / params.length;
	}

	export function roundedAverage(params: Array<number>): number {
		return Math.round(average(params));
	}


}
