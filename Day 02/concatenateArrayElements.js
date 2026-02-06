function concat(...args) {
    //...args catches all the arguments and
    // puts them inside an array
    // for this case it would be a nested array
    const concatedNatedArray=[];
	args.forEach((arr)=>{
        concatedNatedArray.push(...arr); // Each value being iterated is also an array so
                                         // we need to spread it as well to push only numbers
                                         // not array
    })
    return concatedNatedArray;
}
concat([1],[2],[3]);

// another solution

function concat2(...args){
    return [].concat(...args);
}
console.log(concat([1],[2],[2]));
