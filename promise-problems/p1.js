// Create a function waitAndReturn that takes a number
// ms and a value. It should return a Promise that 
// resolves with the given value after ms milliseconds.

const waitAndReturn = (ms) => {
    const aPromise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Operation Successfull")
        },ms)
    })
    return aPromise;
}
waitAndReturn(500).then(console.log)