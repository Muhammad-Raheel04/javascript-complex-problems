// Create a curried function for filtering arrays
// It should work like:
// const numbers = [1, 2, 3, 4, 5, 6];
// const greaterThan = filterBy(comparator) => value => array
// const greaterThan3 = greaterThan(3);
// console.log(greaterThan3(numbers));  // [4,5,6]

const filterBy=(compartor)=>(arr)=>{
    return arr.filter((num)=>num>=compartor);
}
const greaterThan3=filterBy(4);
console.log(greaterThan3([1,2,3,4]));
