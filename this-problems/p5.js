// what gets log and why?

function log() {
    console.log(this.value);
}

log.call({ value: 10 });

// the value of this inside the regular function
// equals the object we passed while calling the function
// so 10 gets logged
