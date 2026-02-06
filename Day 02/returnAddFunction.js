function returnAddFunction(n){
    return function(a){
        return n+a;
    }
}
const add=returnAddFunction(3);
console.log(add(4));