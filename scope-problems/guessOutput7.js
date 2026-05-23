let abc=100;
if(function xyz(){}){
    abc=abc-typeof(xyz);
}
console.log(abc); // guess output and provide reason

// js treats functions inside condition of if as true
// but it's not accessible inside the block of if statement

// xyz not accessible inside the blocks of 
// so it will give us undefined
// so abc-undefined gives NaN
// change - with + it will get concatenatedD