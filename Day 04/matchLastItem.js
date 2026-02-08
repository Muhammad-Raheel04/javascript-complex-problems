function matchLastItem(arr){ 
   return arr.splice(0,arr.length-1).join('')===arr[arr.length-1];
}
console.log(matchLastItem(["ra","he","el","raheel"]));

