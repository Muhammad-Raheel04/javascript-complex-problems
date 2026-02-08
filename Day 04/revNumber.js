function revNumber(n){
    let str=n.toString();
    let result='';
    for(let i=str.length-1;i>=0;i--){
        const digit=Number(str[i]);
        result+=digit;
    }
    return result;
}
console.log(revNumber(1234));