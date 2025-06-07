import { LNode } from "./bucket";
import Hashkey from "./hashkey";

class Hashmap<T> {
  Map: LNode<T>[] = [];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.Map = new Array(size).fill(null);
  }

  setVal(key: string, val: string | number) {
    const hashkey = Hashkey(key, this.size);
    let bucketIndex = this.Map[hashkey];
    if (bucketIndex === null) {
      this.Map[hashkey] = new LNode(key, val);
    } else {
      let curr = this.Map[hashkey];
      while (curr.next !== null) {
        if (curr.key === key){ 
          console.log(curr.key,key)
          curr.val = val
          break;
        };
        curr = curr.next;
      }
      curr.next = new LNode(key, val);
    }
  }
}

let A = new Hashmap(100);

A.setVal("Martins", "Olumide");
A.setVal("ws", 50);
A.setVal('ws', 100);
console.dir(A, { depth: Infinity });
