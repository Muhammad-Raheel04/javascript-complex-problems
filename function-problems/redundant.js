function redundant(str){
    return function(){
        return str;
    }
}
const f1=redundant('apples');
console.log(f1());
