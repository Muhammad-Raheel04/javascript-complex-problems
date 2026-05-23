// bring out common elements
// or intersection of both arrays
const a1=[1,2,3,4,5];
const a2=[3,4,5,6,7];

const intersectedArray=a1.filter((item)=>a2.includes(item))
console.log(intersectedArray)