import Hashkey from "./hashkey";

class LNode<T> {
  key: string;
  val: string | number;
  next: LNode<T> | null;

  constructor(key: string, val: string | number) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

class Hashmap<T> {
  Map: LNode<T>[] = [];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.Map = new Array(size).fill(null);
  }

  setVal(key: string, val: string | number) {
    const hashkey = Hashkey(key, this.size);
    let curr: LNode<T> | null = this.Map[hashkey];
    if (curr === null) {
      this.Map[hashkey] = new LNode(key, val);
      return;
    } else {
      let help = curr;
      while (curr !== null) {
        if (curr.key === key) {
          curr.val = val;
          return;
        }
        help = curr;
        curr = curr.next;
      }
      help.next = new LNode(key, val);
    }
  }

  getVal(key: string): string | number | undefined {
    const hashkey = Hashkey(key, this.size);
    let curr: LNode<T> | null = this.Map[hashkey];
    if (curr === null) return undefined;
    else {
      while (curr !== null) {
        if (curr.key === key) return curr.val;
        curr = curr.next;
      }
    }
    return undefined;
  }
}

let A = new Hashmap(100);

A.setVal("Martins", "Olumide");
A.setVal("David", 50);
A.setVal("Martins", 100);
A.setVal("Martins", 200);
A.setVal("uu", 1000);
A.setVal("uuuu", "Portis");
console.log(A.getVal("David"));
//console.dir(A, { depth: Infinity });
