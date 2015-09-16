import Insertion from '../Insertion';

const testArr1 = [4, 0, 2, 3, 10, 9, 6, 7, 1, 8, 5];
const testArr2 = ['apple', 'orange', 'banana', 'peach', 'blueberry', 'mango'];

console.log(Insertion.sort(testArr1));    // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(Insertion.sort(testArr2));    // [ 'apple', 'banana', 'blueberry', 'mango', 'orange', 'peach' ]
