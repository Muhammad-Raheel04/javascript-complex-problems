// Write a function fetchAllUsers that takes 
// an array of user IDs and returns a Promise 
// that resolves to an array of user objects. 
// Use Promise.all to fetch each user in parallel. 
// Assume a fetchUser(id) function exists that returns 
// a Promise resolving to a user object.

const fetchUser=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id,name:`User${id}`})
        },300)
    })
}
const fetchAllUsers=(userIds)=>{
    const promises=userIds.map((id)=>fetchUser(id))
    return Promise.all(promises)
}
fetchAllUsers([1,2,3]).then((users)=>console.log(users))
                      .catch((error)=>console.log(error))