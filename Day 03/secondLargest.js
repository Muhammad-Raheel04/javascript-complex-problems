function secondLargest(arr){
   let newArr=[];
   const firstLargest=Math.max(...arr);
   for(let i=0;i<arr.length;i++){
      if(arr[i]===firstLargest){
        continue;
      }
      newArr.push(arr[i]);
   }
   const secondLargest=Math.max(...newArr);
   return secondLargest;

}
console.log(secondLargest([1,2,9,3,4,5]));
