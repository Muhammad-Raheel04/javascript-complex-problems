// filter numbers and characters

let arr = ['a', 1, 'b', 2, 'c', 3];
const numberArray = arr.filter((num) => typeof num === 'number');
const strArray = arr.filter((s) => typeof s === 'string')
console.log(numberArray)
console.log(strArray)