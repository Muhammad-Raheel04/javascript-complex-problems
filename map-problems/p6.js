// check whether the given arrays are equivalent
// (each contain same elements)

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];

// two arrays are equivalent only if they contain
// the same elements with the same frequencies

function arrayChecker(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const map = new Map();

    for (const num of arr1) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    for (const num of arr2) {
        if (!map.has(num) || map.get(num) === 0) {
            return false;
        }

        map.set(num, map.get(num) - 1);
    }

    return true;
}
console.log(arrayChecker(arr1, arr2));