// Create a string containing each character only once.
const word = "programming";

const newWord = [...new Set(word)].join("")
console.log(newWord)