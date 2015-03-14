
module tcsc {

  export class QuickFind {
    array: number[];

    constructor(N: number) {
      this.array = [];
      for(var i = 0; i < N; i++) {
        // set id of each object to itself (N accesess)
        this.array[i] = i;
      }
    }

    connected(p: number, q: number): boolean {
      // check whether p and q are in the same component (2 accesses)
      return this.array[p] === this.array[q];
    }

    union(p: number, q: number): void {

      var pid: number = this.array[p];
      var qid: number = this.array[q];

      // change all entries with id[p] to id[q] (at most 2N + 2 accesses)
      for(var i: number = 0; i < this.array.length; i++) {
        if(this.array[i] === pid) {
          this.array[i] = qid;
        }
      }

    }

  }

}
