function squareDigits(n){
  const str=n.toString();
  let result="";
  for(let i=0;i<str.length;i++){
    const digit=Number(str[i]);
    result+=digit*digit;
  }
  return Number(result);
}
console.log(squareDigits(1234));