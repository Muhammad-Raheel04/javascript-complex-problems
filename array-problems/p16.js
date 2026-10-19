// find maximum sum of subarry of size k
// let k = 3

const arr = [2, 40, 5, -20, 99, 2];
const k = 3;

// Expected output: 84

// const maxSubArraySum = (array) => {
//     let subArray;
//     let maxSum = 0;
//     let lastSum = 0;
//     let firstSum = 0;
//     let newSum = 0;

//     for (i = 0; i < array.length; i++) {
//         subArray = array.slice(i, i + k);
//         if (subArray.length < k) {
//             break;
//         }
//         console.log(subArray)

//         if (i === 0) {
//             firstSum = subArray.reduce((a, c) => a + c, 0);
//             maxSum = firstSum;
//             newSum = firstSum;
//             lastSum = firstSum;
//         }

//         if (i !== 0) {
//             newSum = lastSum - array[i - 1] + subArray[k - 1];
//         }

//         if (newSum > maxSum) {
//             maxSum = newSum;
//             lastSum = maxSum;
//         } else {
//             lastSum = newSum;
//         }
//     }

//     return maxSum;
// }
// console.log(maxSubArraySum(arr));

const maxSubArraySum = (array, k) => {
    if (k <= 0 || k > array.length) {
        return null;
    }

    let currentSum = 0;

    currentSum = array.slice(0, k).reduce((a, b) => a + b, 0);

    let maxSum = currentSum;

    for (let i = k; i < array.length; i++) {
        currentSum = currentSum - array[i - k] + array[i];

        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

console.log(maxSubArraySum(arr, k));