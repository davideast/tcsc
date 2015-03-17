
module tscs {

  export class QuickUnion {

    id: number[];

    constructor(n: number) {
      this.id = [];
      // set id of each object to itself (n array accesses)
      for(var i: number = 0; i < n; i++) {
        this.id[i] = i;
      }
    }

    protected findRoot(i: number): number {
      // chase parent pointer until we reach the root (depth of i array accesses)
      var id = this.id;
      while(i !== id[i]) {
        // flatten tree - make every other node in path point to its grandparent
        id[i] = id[id[i]];
        i = id[i];
      }
      return i;
    }

    connected(p: number, q: number): boolean {
      return this.findRoot(p) === this.findRoot(q);
    }

    // To merge the components containing p + q:
    // - Find p's root
    // - Find q's root
    // - Set p's root to q's root
    union(p: number, q: number): void {
      // change the root of p to the root of q
      // (depth of p and q array accesses)
      var pRoot: number = this.findRoot(p);
      var qRoot: number = this.findRoot(q);
      this.id[pRoot] = qRoot;
    }

  }

}
