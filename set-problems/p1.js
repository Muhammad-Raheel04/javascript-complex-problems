// filter array using set
const array = [1, 1, 1, 2, 3, 3, 4, 5];

const filteredArray = [...new Set(array)]
console.log(filteredArray)
