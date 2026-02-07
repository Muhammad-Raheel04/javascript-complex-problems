function keysAndValues(obj) {
	let keys=[];
    let values=[];
    Object.keys(obj).forEach((key)=>{
        keys.push(key);
    })
    Object.values(obj).forEach((value)=>{
        values.push(value);
    })
    return [keys,values];
}
console.log(keysAndValues({a:1,b:2,c:3}));