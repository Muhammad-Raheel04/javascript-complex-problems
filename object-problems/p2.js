const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { c: 5, d: 6 };

// Merge all three objects into one using:
// 1. Spread operator
// 2. Object.assign()
// Which property wins when keys conflict?


// solution
const merged = Object.assign({}, obj1, obj2, obj3);
console.log(merged);
