function secondLargest(arr){
   return arr.sort((a,b)=>b-a)[1];

}
console.log(secondLargest([1,2,9,3,4,5]));
