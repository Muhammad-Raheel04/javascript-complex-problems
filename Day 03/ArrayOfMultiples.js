function arrayOfMultiples (num, length) {
	let arr=[];
    for(let i=1;i<=length;i++){
        arr.push(i*num);
    }
    return arr;
}
console.log(arrayOfMultiples(2,10));