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

  reduce<T>(
    callback: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T,
    initialValue?: any
  ) {
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }
    let accumulator, startIndex;
    if (initialValue !== undefined) {
      accumulator = initialValue;
      startIndex = 0;
    } else {
      if (this.length === 0) {
        throw new TypeError("Reduce of empty array with no initial value");
      }
      accumulator = this.list[0];
      startIndex = 1;
    }
    for (let i = startIndex; i < this.length; i++) {
      accumulator = callback(accumulator, this.list[i], i, this.list);
    }
    return accumulator;
  }

  reverse() {
    let i = 0,
      j = this.length - 1;
    while (i < j) {
      let temp = this.list[i];
      this.list[i] = this.list[j];
      this.list[j] = temp;
      i++, j--;
    }
    return this.list;
  }

  unshift<T>(...args: T[]): void {
    this.list = [...args, ...this.list];
    let i = 0;
    while (args[i] != null) {
      this.length += 1;
      i++;
    }
  }

  shift(): void {
    let newArr = [];
    for (let i = 1; i < this.length; i++) {
      newArr[i - 1] = this.list[i];
    }
    this.list = newArr;
    this.length -= 1;
  }

  slice(start: number = 0, end: number = this.length) {
    if (start < 0) start = this.length + start < 0 ? 0 : this.length + start;
    if (end < 0) end = this.length + end < 0 ? 0 : this.length + end;
    console.log(start, end);
    let newArr = [],
      j = 0;
    for (let i = start; i < end; i++) {
      newArr[j] = this.list[i];
      j++;
    }
    return newArr;
  }

  //splice<T>(start: number = 0, deleteCount: number = 1): T[] {}
}
