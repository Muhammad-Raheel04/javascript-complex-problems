const words = ['hello', 'world', 'javascript', 'map', 'filter'];

// Write code to:
// 1. Get array of word lengths
// 2. Get words longer than 5 characters
// 3. Create sentence from words (join with spaces)

// solution below
const wordLengthArray = words.map((item) => item.length);
console.log(wordLengthArray);

const wordLongerThanFiveArray =words.filter((item)=>item.length>5);
console.log(wordLongerThanFiveArray);

const createSentence=words.join(" ");
console.log(createSentence);

