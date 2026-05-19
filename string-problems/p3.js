// Check if two strings are anagrams (same letters, different order)
// Example: areAnagrams("listen", "silent") → true
// areAnagrams("hello", "world") → false
// Ignore case and spaces

const areAnagrams = (str1, str2) => {
    const sortedStr1 = str1.split("").sort().join(" ").trim();
    const sortedStr2 = str2.split("").sort().join(" ").trim();
    return sortedStr1 === sortedStr2;
}
console.log(areAnagrams("ln", "l  n"));