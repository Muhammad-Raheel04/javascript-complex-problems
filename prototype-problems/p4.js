const grandParent = { grand: 'grand' };
const parent = Object.create(grandParent);
parent.parent = 'parent';
const child = Object.create(parent);
child.child = 'child';

// Trace the prototype chain
console.log(child.__proto__ === parent);           // ?
console.log(child.__proto__.__proto__ === grandParent); // ?
console.log(child.__proto__.__proto__.__proto__ === Object.prototype); // ?
console.log(child.__proto__.__proto__.__proto__.__proto__); // ?

// Property lookup
console.log(child.grand);  // ?
console.log(child.parent); // ?
console.log(child.child);  // ?

// first 4 log statements log following
// true
// true
// true
// null

// last 3 log statements log following
// grand
// parent
// child