const obj = { name: "Alice" };

console.log(obj.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__);
console.log(Object.__proto__ === Function.prototype);


// Output
// true (obj created with {} inherits from Object.prototype)
// null (Object.prototype is top of the prototype chain there's nothing above it)
// true (Object itself is a function,so it inherits from Function.prototype)
