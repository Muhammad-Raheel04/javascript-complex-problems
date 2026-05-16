// What gets logged and why?
const obj = { a: 1, b: 2 };

function updateObj(obj) {
    obj.a = 99;
    obj = { b: 100 }; // this is the trick line 
    // instead of modifying the original object 
    // we are creating a local obj to point
    // to a brand new memory address 
    // if we keep it obj.b=100
    // then no new local obj 
    // original b gets updated
    // and original obj will also have c then
    obj.c = 200;
    return obj;
}

const result = updateObj(obj);
console.log(obj);
console.log(result);

// Output:
// { a: 99, b: 2 }  (obj - original modified partially)
// { b: 100, c: 200 } (result - new object)

// Explanation:
// 1. obj.a = 99 - modifies original object (reference)
// 2. obj = { b: 100 } - reassigns parameter to new object (doesn't affect original)
// 3. obj.c = 200 - adds to the new object
// 4. Original 'obj' variable outside remains pointing to { a: 99, b: 2 }