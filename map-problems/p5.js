// find the most frequent element

const arr = [1, 2, 2, 3, 3, 3];

const countElements = new Map();

for (let i = 0; i < arr.length; i++) {
    if (countElements.has(arr[i])) {
        countElements.set(arr[i], countElements.get(arr[i]) + 1)
    } else {
        countElements.set(arr[i], 1)
    }
}
console.log("Most frequent", Math.max(...countElements.values()))