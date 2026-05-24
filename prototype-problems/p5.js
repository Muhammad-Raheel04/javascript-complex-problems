function Person(name) {
    this.name = name;
}
Person.prototype.sayName = function() { return this.name; };

const john = new Person('John');

// Fill in the blanks with true/false
console.log(john.__proto__ === Person.prototype);           // ?
console.log(Person.prototype.__proto__ === Object.prototype); // ?
console.log(john.__proto__.__proto__ === Object.prototype);   // ?
console.log(Person.__proto__ === Function.prototype);         // ?
console.log(Function.prototype.__proto__ === Object.prototype); // ?

// output
// all true