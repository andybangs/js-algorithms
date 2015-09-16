export default function (items) {
  for (let i = 0, len = items.length; i < len; i++) {
    const val = items[i];
    let j;

    for (j = i - 1; j > -1 && items[j] > val; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = val;
  }

  return items;
}
