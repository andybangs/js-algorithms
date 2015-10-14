// Based on Nicholas Zakas' recursive merge sort implementation
// https://github.com/nzakas/computer-science-in-javascript

function merge(left, right) {
  const arr = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr.push(left[i++]);
      console.log(arr);
    } else {
      arr.push(right[j++]);
      console.log(arr);
    }
  }

  return arr.concat(left.slice(i)).concat(right.slice(j));
}

export default function mergeSort(items) {
  if (items.length < 2) {
    return items;
  }

  const mid = Math.ceil(items.length / 2);
  const left = items.slice(0, mid);
  const right = items.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}
