function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function () {
    console.log(this.name);
};

const p1 = new Person("Raheel");

p1.sayHi();
// Explain step by step how JS finds sayHi.

// When p1.sayHi() is called, JavaScript first looks 
// for sayHi on p1, doesn’t find it, then follows the
// prototype link to Person.prototype, finds the method
// there, and executes it with this bound to p1, so it 
// prints "Raheel".

// it's my 1500th commit of 2026