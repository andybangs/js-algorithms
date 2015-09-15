import Queue from '../Queue';

const queue = new Queue();

queue.enqueue('red');
queue.enqueue('green');
queue.enqueue('blue');

console.log('size()', queue.size());        // 3
console.log('isEmpty()', queue.isEmpty());  // false

console.log('dequeue()', queue.dequeue());        // 'red'
console.log('dequeue()', queue.dequeue());        // 'green'
console.log('dequeue()', queue.dequeue());        // 'blue'

console.log('size()', queue.size());        // 0
console.log('isEmpty()', queue.isEmpty());  // true
