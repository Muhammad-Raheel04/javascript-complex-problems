// validate username
const regex=/^\w{5,15}$/
const isValidUsername=(text)=>{
    return regex.test(text);
}

console.log(isValidUsername("raheel_04"));
console.log(isValidUsername("m.raheel_04")); // dots not allowed