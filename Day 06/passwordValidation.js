const digits=/[0-9]/;
const lower=/[a-z]/;
const upper=/[A-Z]/;
const special=/[!@#$%^&*()\-+]/;
function passwordValidation(password){
    return ((digits.test(password)) && (lower.test(password)) && (upper.test(password)) && (special.test(password)));
}
console.log(passwordValidation("bbA234c@cy~!"));    