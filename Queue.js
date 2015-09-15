export default class Queue {
  constructor() {
    this.first = 0;
    this.last = 0;
    this.items = {};
  }

  size() {
    return this.last - this.first;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(item) {
    this.items[this.last++] = item;
  }

  dequeue() {
    const itemToRemove = this.items[this.first];

    delete this.items[this.first++];

    return itemToRemove;
  }
}
