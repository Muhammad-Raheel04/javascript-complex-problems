function indexMultiplier(arr){
    return arr.reduce((sum,value,idx)=>sum+value*idx,0);
}
console.log(indexMultiplier([1,2,3,4,5]));