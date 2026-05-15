const arrays = [[1, 2], [3, 4], [5, 6]];

// Without using flat(), combine into single array [1, 2, 3, 4, 5, 6]
// Then double each number: [2, 4, 6, 8, 10, 12]

const combineArray = [].concat(...arrays);
console.log(combineArray);

const doubleEachNum=combineArray.map((num)=>num*2);
console.log(doubleEachNum);