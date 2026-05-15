function countTrue(arr){
    return arr.filter((element)=>element===true).length;
}
console.log(countTrue([false,false,true]));