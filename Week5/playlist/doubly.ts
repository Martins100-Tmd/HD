import { rand } from "./util";

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
    this.current = new songNode(songs[0]);
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
    const randomIndex = rand(this.length);
    if (randomIndex < 0) this.current = this.head;
    const useReverseSearch = randomIndex > this.length / 2;
    let currentNode = useReverseSearch ? this.tail : this.head;
    for (let i = 0; i < randomIndex; i++) {
      if (!currentNode) break;
      currentNode = useReverseSearch ? currentNode.prev : currentNode.next;
    }
    this.current = currentNode ?? (useReverseSearch ? this.tail : this.head);
    this.prntNext();
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
    this.prntNext();
  }

  prntNext(): void {
    let curr = this.head,
      output = "";
    while (curr !== null) {
      output += `\x1b[34m${curr.song}\x1b[0m`;
      curr = curr.next;
      output += curr?.prev ? " -> " : "";
    }
    console.log(
      `\x1b[33mPlaylist:\x1b[0m ${output}\n\x1b[33mCurrent:\x1b[0m \x1b[32m${this.current?.song}\x1b[0m`
    );
  }

  prntPrev(): void {
    let curr = this.tail,
      output = "";
    while (curr !== null) {
      output += `\x1b[31m${curr.song}\x1b[0m`;
      curr = curr.prev;
      output += curr?.next ? " -> " : "";
    }
    console.log(
      `\x1b[33mPlaylist:\x1b[0m ${output}\n\x1b[33mCurrent:\x1b[0m \x1b[32m${this.current?.song}\x1b[0m`
    );
  }
}

let A = new songDoublyLinkedList(["songA", "songB", "songC", "songD", "songE"]);
A.add("songF");
A.prntNext();
A.shuffle();
A.setCurrentSong("songF");
