// You have a function fetchUser(id) that
// returns a Promise resolving to a user 
// object { id, name }. Write a function 
// getUserPosts(userId) that first fetches 
// the user, then (using the user’s name) 
// returns another Promise that resolves to 
// "Posts for {name}". Assume fetchUser is 
// already implemented.
const fetchUser=(id)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({id,name:"Alice"})
        },500)
    })
}

const getUserPosts=(userId)=>{
    return fetchUser(userId).then((user)=>{
        return `Posts for ${user.name}`
    })
}
getUserPosts(1).then(console.log)