const scores = [10, 20, 30, 40, 50];

// Use reduce to:
// 1. Find max value using reduce method
// 2. Find min value using reduce method

const max = scores.reduce((max, num) => Math.max(max, num), -Infinity);
const min = scores.reduce((min, num) => Math.min(min, num), Infinity);

console.log(max);
console.log(min);