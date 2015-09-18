import swap from '../helpers/swap';

export default function (items) {
  for (let i = 0, len = items.length; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    if (i !== min) {
      swap(items, i, min);
    }
  }

  return items;
}
