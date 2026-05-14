var x = 5;

function first() {
    console.log(x);
}
function second() {
    var x = 10;
    first();
}
first();
// what gets logged?
// output : 5
// Scope is lexical (determined by where functions are defined, not where they're called)
// first() looks for x in its own scope, then outer scope where x=5
