export default function (items, a, b) {
  const temp = items[a];

  items[a] = items[b];
  items[b] = temp;
}
