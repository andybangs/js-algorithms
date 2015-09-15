import Stack from '../Stack';

const stack = new Stack();

stack.push('apple');
stack.push('orange');
stack.push('banana');

console.log('size()', stack.size());        // 3
console.log('isEmpty()', stack.isEmpty());  // false

console.log('pop()', stack.pop());          // banana
console.log('pop()', stack.pop());          // orange
console.log('pop()', stack.pop());          // apple

console.log('size()', stack.size());        // 0
console.log('isEmpty()', stack.isEmpty());  // true
console.log('pop()', stack.pop());          // undefined
