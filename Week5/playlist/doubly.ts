class songNode<T> {
  song: string | null;
  next: songNode<T> | null;
  prev: songNode<T> | null;

  constructor(song: string) {
    this.song = song;
    this.prev = null;
    this.next = null;
  }
}

class songDoublyLinkedList<T> {
  head: songNode<T> | null;
  tail: songNode<T> | null;
  current: songNode<T> | null;
  length: number;
  currentIndex: number;

  constructor(songs: string[]) {
    this.head = null;
    this.tail = null;
    this.current = null;
    this.length = 0;
    this.currentIndex = 0;
    for (let i = 0; i < songs.length; i++) {
      this.add(songs[i]);
    }
  }

  add(str: string) {
    let newNode = new songNode(str);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    this.length += 1;
    console.log(this.length);
  }

  next(): void {
    this.current = this.current?.next ?? null;
  }

  prev(): void {
    this.current = this.current?.prev ?? null;
  }

  repeat(): void {
    this.current = this.current;
  }

  shuffle(): void {
    if (this.length === 0) return;
    const randomIndex = Math.floor(Math.random() * this.length);
    const useReverseSearch = randomIndex > this.length / 2;
    let currentNode = useReverseSearch ? this.tail : this.head;
    for (let i = 0; i < randomIndex; i++) {
      if (!currentNode) break;
      currentNode = useReverseSearch ? currentNode.prev : currentNode.next;
    }
    this.current = currentNode ?? (useReverseSearch ? this.tail : this.head);
    console.log("Now playing (shuffled):", this.current?.song);
  }

  setCurrentSong(song: string): void {
    let searchFromHead = this.currentIndex < Math.floor(this.length / 2);
    let curr = searchFromHead ? this.head : this.tail;
    let moveFn = (node: songNode<T>) => (searchFromHead ? node.next : node.prev);
    while (curr !== null) {
      if (curr.song === song) {
        this.current = curr;
      }
      curr = moveFn(curr);
    }
  }

  prntNext(): void {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.song);
      curr = curr.next;
    }
  }

  prntPrev(): void {
    let curr = this.tail;
    while (curr !== null) {
      console.log(curr.song);
      curr = curr.prev;
    }
  }
}

let A = new songDoublyLinkedList(["songA", "songB", "songC", "songD", "songE"]);
A.add("songF");
A.prntNext();
//console.dir(A.head, { depth: Infinity });
console.log("\n");
A.prntPrev();
console.log("\n");
A.shuffle();
