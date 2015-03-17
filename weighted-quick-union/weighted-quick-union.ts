/// <reference path='../quick-union/quick-union.ts'/>

module tscs {

  export class WeightedQuickUnion extends QuickUnion {

    size: number[];

    constructor(n: number) {
      super(n);
      this.size = [];
    }

    // To merge the components containing p + q:
    // - Find p's root
    // - Find q's root
    // - Determine which component is larger
    // - Set smaller's root to larger's root
    union(p: number, q: number): void {
      // change the root of p to the root of q
      // takes constant time, given roots (lgN)
      var pRoot: number = this.findRoot(p);
      var qRoot: number = this.findRoot(q);
      var qIsLarger = this.isQLarger(p, q);

      // if q is larger, set p's id to q's id and increment q's size
      if (qIsLarger) {
        this.id[pRoot] = qRoot;
        this.incrementSizeArray(qRoot);
      } else {
        // p is larger, set q's id to p's id and increment p's size
        this.id[qRoot] = pRoot;
        this.incrementSizeArray(pRoot);
      }

    }

    isQLarger(p: number, q: number): boolean {
      return this.size[p] < this.size[q];
    }

    incrementSizeArray(root: number): void {
      this.size[root] = this.size[root] + 1;
    }

  }

}
