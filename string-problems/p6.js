// reverse sentence and it's each word
let str="My name is raheel";

const reverserStr=str
   .split(" ")
   .reverse()
   .map((word)=>word.split("").reverse().join(""))
   .join(" ");

console.log(reverserStr);