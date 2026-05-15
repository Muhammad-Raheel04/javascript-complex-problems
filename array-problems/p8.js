const numbers = [1, 2, 3, 2, 4, 3, 5, 1, 6];

// Remove duplicates using array methods
// Bonus: Keep only first occurrence of each number


// solution
// indexOf operator gives us first occurance of a number
// in an array
// use it to validate whether the num being iterated
// appears twice or not
const duplicateFreeArray=numbers.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(duplicateFreeArray);
