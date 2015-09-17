import shellSort from '../shellSort';

const testArr1 = [17, 11, 4, 0, 2, 14, 3, 10, 13, 9, 20, 19, 6, 7, 1, 16, 8, 5, 12, 15, 18];
const testArr2 = ['y', 'b', 'u', 'k', 'o', 'n', 'l', 'j', 'x', 'c', 's', 'e', 'f', 'm', 'z', 'i', 'q', 'h', 'a', 'r', 'g', 't', 'p', 'd', 'v', 'w'];

console.log(shellSort(testArr1));    // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
console.log(shellSort(testArr2));    // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
