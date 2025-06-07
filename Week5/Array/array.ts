class MartinsArray {
  length: number = 0;
  list: any[] = [];

  concat<T>(...args: T[]) {
    this.list = [...this.list, ...args];
    let i = 0;
    while (args[i] != null) {
      this.length + 1;
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
}

let M1 = new MartinsArray();
M1.concat(1, 2, 3, 4);
M1.log();
console.log(M1.every((x: any) => x <= 4));
//M1.fill(0, 1, 3)
console.log(M1.list);
console.log(M1.filter((x: number) => x % 2 == 0));
console.log(M1.findIndex((x: number) => x % 4 == 0));
