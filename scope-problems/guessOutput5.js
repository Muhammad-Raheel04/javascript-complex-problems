function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    }
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter1());

// what gets logged?
// each call to createCounter() creates a 
// a new closure with it's own count variable
