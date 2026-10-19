// check for digits in text
const regex=/\d/
const digitChecker=(text)=>{
    return regex.test(text);
}
console.log(digitChecker("Rahee l"));