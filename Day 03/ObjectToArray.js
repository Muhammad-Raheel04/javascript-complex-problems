function toArray1(obj){
    return Object.entries(obj);
}
console.log(toArray1({
    "age":2,
    "class":10
}));
function toArray2(obj){
    let arr=[];
    Object.keys(obj).forEach((key)=>{
        arr.push([key,obj[key]]);
    })
    return arr;
}
console.log(toArray2({"name":"Raheel","age":21}));