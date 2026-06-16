// Write a function that counts the frequency of each element in an array
// Using Map (not object)
// Example: countFrequencies(['a', 'b', 'a', 'c', 'b', 'a'])
// Returns: Map(3) { 'a' => 3, 'b' => 2, 'c' => 1 }

const arr = ['a', 'b', 'c', 'a', 'a', 'c', 'f'];
const freq = new Map();
arr.forEach((item) => {
    freq.set(item, (freq.get(item) || 0) + 1)
})
console.log(freq)

