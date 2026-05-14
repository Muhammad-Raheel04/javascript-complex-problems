var a = 10;
function test() {
    console.log(a);
    var a = 20;
}
test();
// output : undefined
// reason :
// var is function scoped the var in statement a gets
// hoisted above all the lines inside the function
// but only declaration
// so console.log(a) prints undefined