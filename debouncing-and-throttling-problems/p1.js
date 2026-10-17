// Implement a simple debounce function
// Test: Create a function that logs "Hello" but only after 500ms of no clicks

function debounce(fn, delay) {
    let timer = null;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            fn(...args);
        }, delay)
    }
}

function debouncHello() {
    console.log("Hello");
}
const debouncedHello = debounce(debouncHello, 5000);

debouncedHello();
debouncedHello();
debouncedHello();