// Based on Nicholas Zakas' insertion sort implementation
// https://github.com/nzakas/computer-science-in-javascript

export default function (items) {
  for (let i = 0, len = items.length; i < len; i++) {
    const val = items[i];
    let j;  // needs to be accessable outside of inner loop

    for (j = i - 1; j > -1 && items[j] > val; j--) {
      items[j + 1] = items[j];
    }

    items[j + 1] = val;
  }

  return items;
}
