function Dog(name) {
    this.name = name;
}

const rex = new Dog('Rex');

console.log(Dog.prototype === rex.__proto__);
console.log(Dog.__proto__===Function.prototype);
console.log(Dog.prototype.constructor===Dog);

// Output
// true (instance points to the constructor's prototype so in actual both are same)
// true as Dog is a function and inherits from Function
// true (prototype has referenced back to constructor)
