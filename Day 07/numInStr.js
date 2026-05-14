function numInStr(arr){
    return arr.filter(str=>[...str].some(ch=>!isNaN(ch) && ch!==' '));
}
console.log(numInStr(["raheel","123"]));