// Write a function that capitalizes the first letter of a string
// Example: capitalize("hello") must give "Hello"
// Edge cases: empty string, single character, already capitalized

const capatilize=(str)=>{
    const string=str.trim();
    if(string===""){
        return "";
    }
    return string[0].toUpperCase()+string.slice(1).toLowerCase();
}
console.log(capatilize(""));
console.log(capatilize("H"));
console.log(capatilize("hello"))
console.log(capatilize(" hello"));