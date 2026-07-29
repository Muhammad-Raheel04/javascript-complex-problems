const array = [
    { name: "Raheel", age: 21 },
    { name: "Talha", age: 21 },
    { name: "Ali", age: 21 },
]

console.log(array.filter((item) => item.age === 21));
console.log(array.find((item) => item.age === 21));

// what would each console statement will print and why?

// filter method will return us an array
// while find method will give us the first match and an object
// if found a match otherwise it will return undefined