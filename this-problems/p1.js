// what does each console.log() output and why?

const obj = {
    name: "Alice",
    getName() {
        console.log(this.name);
    }
}
const fn = obj.getName;
obj.getName();  // ?
fn();           // ?

// first one logs Alice as the obj before dot becomes
// the value of this inside the function

// during the creation of fn we are just copying the refernce
// not the object fn() is a regular standalone function call

// so this is no longer obj


// fix
// we can fix it by binding the obj with the reference
// const fn=obj.getName.bind(obj)

