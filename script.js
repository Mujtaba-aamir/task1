let increment=document.getElementById("increment");
let decrement=document.getElementById("decrement");
let value=document.getElementById("number");

increment.addEventListener("click", ()=>{
    value.innerHTML=parseInt(value.innerHTML)+1
})

decrement.addEventListener("click", ()=>{
    if(value.innerHTML==1)
        return;
    else
    value.innerHTML=parseInt(value.innerHTML)-1
})