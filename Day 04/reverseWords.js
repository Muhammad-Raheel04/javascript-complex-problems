function reverseWords(string){
    const arryOfString=string.split(' ');
    let reversedString="";
    for(let i=arryOfString.length-1;i>=0;i--){
        reversedString+=arryOfString[i]+" ";
    }
    return reversedString;
}
console.log(reverseWords("hello it's raheel"));