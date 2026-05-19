// Find the longest word in a sentence
// Example: longestWord("The quick brown fox jumps over the lazy dog") 
// must give "jumps" (or "quick" if first)
// If multiple same length, return the first one

const longestWord = (str) => {
    let string = str.trim();
    return str.split(" ").sort((a, b) => b.length - a.length)[0];
}
console.log(longestWord("hello i am rahee"));
