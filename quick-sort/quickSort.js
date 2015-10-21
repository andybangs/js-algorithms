// Based on Nicholas Zakas' quicksort implementation
// https://github.com/nzakas/computer-science-in-javascript

import swap from '../helpers/swap';

function partition(items, left, right) {
  const pivot = items[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;

  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }

    while (items[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
    }
  }

  return i;
}

export default function quickSort(items, left = 0, right = items.length - 1) {

  if (items.length > 1) {
    const index = partition(items, left, right);

    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }

    if (index < right) {
      quickSort(items, index, right);
    }

    return items;
  }
}
