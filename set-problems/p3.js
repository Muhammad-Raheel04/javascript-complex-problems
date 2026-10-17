// Find the values present in both arrays
// and difference and union as well
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];

// Expected: [3, 4, 5]
// Expected: [1,2]
// Expected: [1,2,3,4,5,6,7]
console.log([...(new Set(a)).intersection(new Set(b))]);
console.log([...(new Set(a)).difference(new Set(b))]);
console.log([...(new Set(a)).union(new Set(b))]);
