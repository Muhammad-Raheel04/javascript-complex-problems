for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}
// guess output
// output 3 3 3
// var is function scoped, not block-scoped.
// All setTimeout callbacks share the
// same i variable, which becomes 3 after loop ends
// fix: use let instead of var