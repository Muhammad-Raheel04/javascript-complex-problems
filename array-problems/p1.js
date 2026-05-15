// Without using loops, create:
// 1. An array of squares (1, 4, 9, 16, 25)
// 2. An array of only odd numbers
// 3. The sum of all numbers

const numbers=[1,2,3,4,5];
const squaredNumbers=numbers.map((num)=>num*num);
console.log(squaredNumbers);

const oddNumbers=numbers.filter((num)=>{
    if(num%2!==0){
        return num;
    }
})
console.log(oddNumbers);

const sumArray=numbers.reduce((sum,num)=>sum+num,0);
console.log(sumArray);