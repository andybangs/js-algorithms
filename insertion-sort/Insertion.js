import swap from '../helpers/swap';

export default class Insertion {
  static sort(items) {
    for (let i = 0, len = items.length; i < len; i++) {
      for (let j = i; j > 0 && items[j] < items[j - 1]; j--) {
        swap(items, j, j- 1);
      }
    }

    return items;
  }
}
