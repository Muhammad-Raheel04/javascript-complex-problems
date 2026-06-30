// i was asked this question in an interview
// predict output
// consider a scenario in which a variable is 
// declared and initialized using var inside an 
// if statement and try to log value of this variable
// inside another if statements
// both these if statements are present inside a function

function predictOutput(){
    if(true){
        var name="Raheel";
    }
    if(true){
        console.log(name);  
    }
}
predictOutput();
// output
// Raheel
// solution
// as var is function scoped so it will behave like it is
// declared inside the function and it will accessible inside
// this function