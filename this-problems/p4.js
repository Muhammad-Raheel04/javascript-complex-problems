// What does this output? (Tricky - event handler context)

const button = {
    text: 'Click Me',
    handleClick() {
        console.log(this.text);
    },
    setup() {
        // Simulating DOM event listener
        setTimeout(this.handleClick, 1000);
    }
};

button.setup(); // ?

// How would you fix it to log "Click Me"?

// output
// undefined
// as when we are calling the this.handleClick inside 
// the setup function we are only passing a reference to
// a function inside button object
// the context of this gets lost
// 
// fix
// to fix it bind value of this with the reference
// like this.handleClick.bind(this)
// or use arrow function to call handleClick
// as arrow function lexically captures this from setup()
// so this remains button