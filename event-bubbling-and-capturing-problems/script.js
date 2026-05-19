// if we keep third parameter false
// then event bubbles up
// and if we tooggle it 
// then event trickles down (event capturing)
document.getElementById('grandParent')
.addEventListener('click',()=>{
    console.log("Grand Parent clicked")
},true)

document.getElementById('parent')
.addEventListener('click',()=>{
    console.log("Parent clicked")
},true)

document.getElementById('child')
.addEventListener('click',()=>{
    console.log("Child clicked")
},false)

