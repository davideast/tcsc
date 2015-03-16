
module tcsc {

  export class QuickFind {
    array: number[];

    constructor(n: number) {
      this.array = [];
      for(var i = 0; i < n; i++) {
        // set id of each object to itself (n accesess)
        this.array[i] = i;
      }
    }

    connected(p: number, q: number): boolean {
      // check whether p and q are in the same component (2 accesses)
      return this.array[p] === this.array[q];
    }

    union(p: number, q: number): void {

      // pick out the values ahead of time
      // the array values will shift below when unioning
      var pid: number = this.array[p];
      var qid: number = this.array[q];

      // change all entries with id[p] to id[q] (at most 2n + 2 accesses)
      for(var i: number = 0; i < this.array.length; i++) {
        if(this.array[i] === pid) {
          this.array[i] = qid;
        }
      }

    }

  }

}
