class randomNumber {
  hash: any;

  constructor() {
    this.hash = {};
  }

  num(size: number) {
    let random = Math.floor(Math.random() * size);
    if (Object.keys(this.hash).length === size) return -1;
    while (true) {
      console.log(random);
      if (this.hash[random] === undefined) {
        return random;
      }
      random = Math.random();
    }
  }
}

export let rand = (size: number) => new randomNumber().num(size);
