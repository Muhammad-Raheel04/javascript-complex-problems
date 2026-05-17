// Write a function that can be called as:
// add(1,2,3)(4,5,6) must give 21
// add(10,20)(30) must give 60
// add(5)(5,5,5) must give 20
// add(1,2)(3,4)(5,6) must give 21
const add = (...args) => {
    return (...nextArgs) => {
        const sum1 = args.reduce((a, b) => a + b, 0);
        const sum2 = nextArgs.reduce((a, b) => a + b, 0);
        return sum1 + sum2;
    }
}
console.log(add(10,20)(30,40,50));
console.log(add(1)(2,3));
console.log(add(5)(5,5,5));
