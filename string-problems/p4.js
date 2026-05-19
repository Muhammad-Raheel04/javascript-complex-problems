// Write a function that counts the 
// number of vowels (a, e, i, o, u) in a string
// Example: countVowels("Hello World") must give 3 (e, o, o)

const filterVowels = (str) => {
    let string = str.trim();
    return str.split("").filter((a)=>a.match(/[aeiou]/i)).join("").length;
}
console.log(filterVowels("hello world"));