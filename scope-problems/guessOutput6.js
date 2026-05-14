{
    var a = 1;
    let b = 2;
    const c = 3;
}
console.log(a);
console.log(b);
console.log(c);

// output : 1 
// referenceError for both b & c

// Reason
// let and const are block scopped
// var is not
