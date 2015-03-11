
module helpers {

	export function average(params: Array<number>): number {
		var sum: number = 0;
		for(var i:number=0;i < params.length; i++) {
			sum += params[i];
		}
		return sum / params.length;
	}


}
