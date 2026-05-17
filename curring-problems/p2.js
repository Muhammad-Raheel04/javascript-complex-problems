// Write a function that can be called as:
// sum(1)(2)(3)() must give 6
// sum(1)(2,3)() must give 6
// sum(1,2,3)() must give 6

function sum(...args) {
    let total = args.reduce((acc, curr) => acc + curr, 0);

    function inner(...nextArgs) {
        if (nextArgs.length === 0) {
            return total;
        }
        total += nextArgs.reduce((acc, curr) => acc + curr, 0);
        return inner;
    }
    return inner;
}
console.log(sum(1)(2)(3)());
console.log(sum(1)(2,3))
console.log(sum(1,2,3))



