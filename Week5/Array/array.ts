class MartinsArray {
  length: number = 0;
  list: any[] = [];

  concat<T>(...args: T[]) {
    this.list = [...this.list, ...args];
    let i = 0;
    while (args[i] != null) {
      this.length += 1;
      i++;
    }
  }

  push<T>(...args: T[]) {
    this.list = [...this.list, ...args];
    let i = 0;
    while (args[i] != null) {
      this.length += 1;
      i++;
    }
  }

  log() {
    console.log(this.list);
  }

  every<T>(callback: (item: T, index: number, arr: T[]) => boolean): boolean {
    for (let i = 0; i < this.list.length; i++) {
      if (!callback(this.list[i], i, this.list)) {
        return false;
      }
    }
    return true;
  }

  fill(value: any, start: number, end: number): void {
    for (let i = start; i < end; i++) {
      this.list[i] = value;
    }
  }

  filter<T>(callback: (item: T, index: number, arr: T[]) => boolean) {
    let passList = [];
    for (let i = 0; i < this.list.length; i++) {
      if (callback(this.list[i], i, this.list)) {
        passList.push(this.list[i]);
      }
    }
    return passList;
  }

  find<T>(callback: (value: T, index: number, arr: T[]) => boolean) {
    for (let i = 0; i < this.list.length; i++) {
      if (callback(this.list[i], i, this.list) === true) {
        return this.list[i];
      }
    }
    return undefined;
  }
  findIndex<T>(callback: (value: T, index: number, arr: T[]) => boolean) {
    for (let i = 0; i < this.list.length; i++) {
      if (callback(this.list[i], i, this.list) === true) {
        return i;
      }
    }
    return -1;
  }
  forEach<T>(callback: (value: T, index: number, array: T[]) => void) {
    for (let i = 0; i < this.length; i++) {
      callback(this.list[i], i, this.list);
    }
  }

  includes(searchElement: any, fromIndex: number = 0) {
    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this.list[i]) return true;
    }
    return false;
  }

  pop(): void {
    let lastElement = this.list[this.length - 1],
      newArr = [];
    for (let i = 0; i < this.length - 1; i++) {
      newArr[i] = this.list[i];
    }
    this.list = newArr;
    this.length -= 1;
    return lastElement;
  }

  indexOf(searchElement: any, fromIndex: number = 0): number {
    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this.list[i]) return i;
    }
    return -1;
  }

  join(seperator: string = ","): string {
    let str = "",
      i = 0;
    while (i < this.length) {
      str += this.list[i];
      if (i + 1 !== this.length) str += seperator;
      i++;
    }
    return str;
  }
  *keys() {
    for (let i = 0; i < this.length; i++) {
      yield this.list[i];
    }
  }

  lastIndexOf(searchElement: any, fromIndex: number = 0): number {
    let currIndex = -1;
    for (let i = fromIndex; i < this.length; i++) {
      if (searchElement === this.list[i]) currIndex = i;
    }
    return currIndex;
  }

  map<T>(callback: (value: any, index: number, array: T[]) => T): T[] {
    let mapResult = [];
    for (let i = 0; i < this.length; i++) {
      mapResult[i] = callback(this.list[i], i, this.list);
    }
    return mapResult;
  }
}

let M1 = new MartinsArray();
M1.concat(1, 2, 3, 4);
M1.log();
M1.push(10);
console.log(
  M1.every((x: any) => x <= 4),
  M1.length
);
M1.pop();
//M1.push(3);
console.log(M1.list, M1.lastIndexOf(3));
console.log(M1.map((x) => x * 2));
