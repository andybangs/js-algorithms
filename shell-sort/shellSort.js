// This is a modified JavaScript implementation of the Java program found at the url below:
// http://algs4.cs.princeton.edu/21elementary/Shell.java.html

export default function (items) {
  const len = items.length;
  let h = 1;

  // 3x+1 increment sequence
  while (h < len/3) {
    h = 3 * h + 1;
  }

  while (h >= 1) {
    // h-sort the array
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && items[j] < items[j - h]; j -= h) {
        const temp = items[j];

        items[j] = items[j - h];
        items[j - h] = temp;
      }
    }

    h = Math.floor(h/3);
  }

  return items;
}
