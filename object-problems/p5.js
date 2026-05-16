const users = {
    user1: { name: 'Alice', age: 25 },
    user2: { name: 'Bob', age: 30 },
    user3: { name: 'Charlie', age: 35 }
};

// Transform this object into:
// [
//   { id: 'user1', name: 'Alice', age: 25 },
//   { id: 'user2', name: 'Bob', age: 30 },
//   { id: 'user3', name: 'Charlie', age: 35 }
// ]

const usersArray=Object.entries(users).map(([id,userData])=>({
    id,
    ...userData
}));
console.log(usersArray);