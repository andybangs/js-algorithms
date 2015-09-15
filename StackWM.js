const _n = new WeakMap();
const _items = new WeakMap();

export default class StackWM {
  constructor() {
    _n.set(this, 0);
    _items.set(this, {});
  }

  size() {
    return _n.get(this);
  }

  isEmpty() {
    return _n.get(this) === 0;
  }

  push(item) {
    let n = _n.get(this);
    const items = _items.get(this);

    items[++n] = item;

    _n.set(this, n);
    _items.set(this, items);
  }

  pop() {
    if (!this.isEmpty()) {
      let n = _n.get(this);
      const items = _items.get(this);
      const itemToRemove = items[n];

      delete items[n--];

      _n.set(this, n);
      _items.set(this, items);

      return itemToRemove;
    }
  }
}
