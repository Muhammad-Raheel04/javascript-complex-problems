// Write a function mightFail that takes 
// a boolean shouldFail. If shouldFail is
// true, return a Promise that rejects with
// the error message "Something went wrong".
// Otherwise, resolve with "Success".

const mightFail=(shouldFail)=>{
    return new Promise((resolve,reject)=>{
        if(shouldFail){
            reject("Something went wrong")
            return;
        }
        resolve("Success") 
    })
}
mightFail(false)
  .then(console.log)
  .catch(console.error)