const userMap = new Map([
    ['id1', { name: 'Alice', age: 25 }],
    ['id2', { name: 'Bob', age: 30 }],
    ['id3', { name: 'Charlie', age: 35 }]
]);

// Perform the following:
// 1. Convert map to array of entries
// 2. Convert map to array of keys only
// 3. Convert map to array of values only
// 4. Use forEach to log: "User {name} is {age} years old"
// 5. Convert map to object (plain object)
// 6. Convert object back to map

// Your code here
// array of enteries
const entries=[...userMap];
console.log(entries);

// array of keys
const keys=[...userMap.keys()];
console.log(keys);

const values=[...userMap.values()];
console.log(values);

// Use forEach to log: "User {name} is {age} years old"
userMap.forEach((key,value)=>{
    console.log(`User ${key.name} is ${value.age} years old`)
})

// convert to object
const userObj=Object.fromEntries(userMap);
console.log(userObj);

// convert back to map
const newMap=new Map(Object.entries(userObj));
console.log(newMap);