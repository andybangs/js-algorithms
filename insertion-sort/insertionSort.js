import swap from '../helpers/swap';

export default function (items) {
  for (let i = 0, len = items.length; i < len; i++) {
    for (let j = i; j > 0 && items[j] < items[j - 1]; j--) {
      swap(items, j, j- 1);
    }
  }

  return items;
}

// The alternate implementation below does not use the swap helper function.

// export default function (items) {
//   for (let i = 0, len = items.length; i < len; i++) {
//     const val = items[i];
//     let j;
//
//     for (j = i - 1; j > -1 && items[j] > val; j--) {
//       items[j + 1] = items[j];
//     }
//
//     items[j + 1] = val;
//   }
//
//   return items;
// }
