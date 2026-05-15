function capToFront(str) {
    return str.match(/[A-Z]/g).join('') + str.match(/[a-z]/g).join('');
}
console.log(capToFront("rahEEL"));