// convert the following code Promise-based
// code to use async/await
// function getData() {
//   return fetchUser(1)
//     .then(user => fetchPosts(user.id))
//     .then(posts => posts[0].title);
// }

const getUser=async ()=>{
    try{
        const user=await fetchUser(1)
        const posts=await fetchPost(user.id);
        return posts[0].title
    }catch(error){
        console.log(error)
    }
}