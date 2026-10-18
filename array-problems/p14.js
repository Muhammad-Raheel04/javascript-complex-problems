// move zeros to end
const arr = [1, 0, 2, 0, 3, 2, 0];


function moveZeros(arr) {
    let zeroCount = 0;
    let newArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArray.push(arr[i]);
        } else {
            zeroCount++;
        }
    }
    
    for (let i = 0; i < zeroCount; i++) {
        newArray.push(0);
    }

    return newArray;
}
console.log(moveZeros(arr))