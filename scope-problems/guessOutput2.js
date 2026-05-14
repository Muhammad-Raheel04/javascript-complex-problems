let b = 30;

function test2() {
    console.log(b);
    let b = 40;
}
test2();
// output
// ReferenceError: Cannot access 'b' before initialization
// let is hoisted but TDZ until declaration line
