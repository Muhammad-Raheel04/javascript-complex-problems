// Predict the output

const person = {
    name: 'Sarah',
    sayName: () => {
        console.log(this.name);
    },
    sayNameRegular() {
        console.log(this.name);
    }
};

person.sayName();        // ?
person.sayNameRegular(); // ?

// output
// undefined
// Sarah

// arrow function inhertis this from global scope
// regular functions use implicit binding
