import swap from '../helpers/swap';

export default function (items) {
  let sorted = false;
  let swapped = false;

  while (sorted === false) {
    for (let i = 0, len = items.length; i < len; i++) {
      if (items[i] > items[i + 1]) {
        swap(items, i, i + 1);
        swapped = true;
      }
    }

    if (swapped) {
      swapped = false;
    } else {
      sorted = true;
    }
  }

  return items;
}
