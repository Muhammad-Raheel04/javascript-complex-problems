// Write a function chunk(array, size) 
// that splits an array into groups of size.
// If the array cannot be split evenly, 
// the final chunk will contain the remaining elements.
// Input: chunk([1, 2, 3, 4, 5], 2)
// Output: [[1, 2], [3, 4], [5]]

const chunker = (array, size) => {
    const chunked = [];

    let index = 0;
    while (index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}
const result = chunker([1, 2, 3, 4, 5, 6, 7], 2);
console.log(result)