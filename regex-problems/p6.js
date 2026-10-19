// Replace multiple spaces
const regex=/\s+/g;
const text="Raheel    love    JavaScript";

const normalizeSpaces=(text)=>{
    return text.replace(regex," ");
}
console.log(normalizeSpaces(text));