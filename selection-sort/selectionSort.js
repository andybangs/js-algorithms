export default function (items) {
  for (let i = 0, len = items.length; i < len; i++) {
    let min = i;

    for (let j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    if (i !== min) {
      const temp = items[i];

      items[i] = items[min];
      items[min] = temp;
    }
  }

  return items;
}
