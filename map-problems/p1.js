// Create a Map and perform basic operations
// 1. Create a map with initial values: ['a', 1], ['b', 2], ['c', 3]
// 2. Add a new key 'd' with value 4
// 3. Update value of 'b' to 20
// 4. Check if key 'c' exists
// 5. Delete key 'a'
// 6. Get the size of the map
// 7. Clear all entries

// Your code here
const userMap = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);
userMap.set('d', 4);
console.log(userMap);
userMap.set('b',20);
console.log(userMap);
console.log(userMap.has('c'));
userMap.delete('a');
console.log(userMap)
console.log(userMap.size)
userMap.clear();
console.log(userMap)

