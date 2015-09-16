export default class Stack {
  constructor() {
    this.n = 0;
    this.items = {};
  }

  size() {
    return this.n;
  }

  isEmpty() {
    return this.n === 0;
  }

  push(item) {
    this.items[++this.n] = item;
  }

  pop() {
    if (!this.isEmpty()) {
      const itemToRemove = this.items[this.n];

      delete this.items[this.n--];

      return itemToRemove;
    }
  }
}
