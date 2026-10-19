// find all words starting with a capital letter

const regex=/\b[A-Z][a-zA-Z]*\b/g;
const text = "Raheel is Learning JavaScript";

const capitalSeeker=(text)=>{
    return text.match(regex);
}
console.log(capitalSeeker(text))