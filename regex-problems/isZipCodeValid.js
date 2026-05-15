const regex=/^\d{5}$/;
function isZipCodeValid(code){
   return regex.test(code);
}
console.log(isZipCodeValid("235@54")); 
console.log(isZipCodeValid("4322222"));
console.log(isZipCodeValid("32443")); // true

