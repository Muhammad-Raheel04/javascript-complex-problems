const digits=/[0-9]/;
const lower=/[a-z]/;
const upper=/[A-Z]/;
const special=/[!@#$%^&*()\-+]/;
function isPasswordStrong(password){
    let missing=0;
    if(!digits.test(password)){
        missing++;
    }
    if(!lower.test(password)){
        missing++;
    }
    if(!upper.test(password)){
        missing++;
    }
    if(!special.test(password)){
        missing++;
    }

    const totalLengthNeeded=Math.max(0,6-password.length);

    return Math.max(missing,totalLengthNeeded);
}
console.log(isPasswordStrong("$dotenv#123Z"));
