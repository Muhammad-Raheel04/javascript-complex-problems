function revNumber(n){
    return Number(String(n).split('').reverse().join(''));
}
console.log(revNumber(1234));