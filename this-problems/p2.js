// Predict the output

const user = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hi, I'm ${this.name}`);
        
        function inner() {
            console.log(`Inner: ${this.name}`);
        }
        inner();
    }
};

user.greet();

// Hi, I'm John  // as this knows the object calling it
// Inner: undefined // as inside inner function this doesn't know which object calling 
// inside browser this equals window object but window.name again becomes undefined
// if we update inner which is a regular function to an arrow function
// then it inherits this from greet and output becomes Inner: John

// Reason
// regular functions have their own this
// arrow functions get their this from their lexical scope
// lexical context enlosing concept envolved here