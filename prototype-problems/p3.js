function Animal() {}
Animal.prototype.walk = function() { return 'walking'; };

const cat = new Animal();

// Which are true?
// A) cat.__proto__ === Animal.prototype
// B) cat.prototype === Animal.__proto__
// C) Animal.prototype.__proto__ === Object.prototype
// D) Animal.__proto__ === Function.prototype


// true (instance __proto__ points to constructor's prototype)
// false (instances don't have prototype property)
// true (Animal.prototype is object, so it's __proto__ is Object.prototype)
// true (Animal is function, inherits from Function.prototype)