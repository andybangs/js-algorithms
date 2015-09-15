const _first = new WeakMap();
const _last = new WeakMap();
const _items = new WeakMap();

export default class QueueWM {
  constructor() {
    _first.set(this, 0);
    _last.set(this, 0);
    _items.set(this, {});
  }

  size() {
    const first = _first.get(this);
    const last = _last.get(this);

    return last - first;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(item) {
    let last = _last.get(this);
    const items = _items.get(this);

    items[last++] = item;

    _last.set(this, last);
    _items.set(this, items);
  }

  dequeue() {
    let first = _first.get(this);
    const items = _items.get(this);
    const itemToRemove = items[first];

    delete items[first++];

    _first.set(this, first);
    _items.set(this, items);

    return itemToRemove;
  }
}
