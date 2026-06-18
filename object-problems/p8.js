// iterate an object
const obj={
    name:"Raheel",
    city:"Taxila",
}
for(const key in obj){
    console.log(key,obj[key]);
    
}
Object.keys(obj).forEach(key=>{
    console.log(key,obj[key])
})