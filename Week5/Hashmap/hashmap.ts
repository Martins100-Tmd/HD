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
  Map: LNode<T>[] | null[];
  size: number;

  constructor(size: number) {
    this.size = size;
    this.Map = new Array(size).map((_) => null);
  }

  setVal(key: string, val: string | number) {
    const index = Hashkey(key, this.size);
    let node = this.Map[index];
    if (!node) {
      this.Map[index] = new LNode(key, val);
      return;
    }
    let curr = node;
    while (curr !== null) {
      if (curr.key === key) {
        curr.val = val;
        return;
      }
      if (curr.next === null) break;
      curr = curr.next;
    }
    curr.next = new LNode(key, val);
  }

  getVal(key: string): string | number | undefined {
    const hashkey = Hashkey(key, this.size);
    let curr: LNode<T> | null = this.Map[hashkey];
    if (!curr) return undefined;
    else {
      while (curr !== null) {
        if (curr.key === key) return curr.val;
        curr = curr.next;
      }
    }
    return undefined;
  }

  removeKey(key: string): string | number | undefined {
    const hashkey = Hashkey(key, this.size);
    let curr = this.Map[hashkey];
    if (!curr) return undefined;
    else {
      let help = curr;
      if (help.key === key) {
        let temp = help.next;
        this.Map[hashkey] = temp;
        return help.val;
      } else {
        while (curr !== null) {
          if (curr.next!.key === key) {
            let temp: LNode<T> | null = curr.next!.next;
            let rA = curr.next?.val;
            curr.next = temp;
            return rA;
          }
          curr = curr.next;
        }
      }
    }
  }
}
