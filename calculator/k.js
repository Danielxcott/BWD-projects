let key = document.querySelector(".keypad");
let display = document.querySelector(".display");
let operators = ["+","-","*","%","/"]
let filter = x=>{
    let current = display.innerText;
    let lastchar = current[current.length-1]
if(current.length>=10){
    return false;
}
if(operators.includes(x) && operators.includes(lastchar)){
    return false;
}
if(current ==="0" && x!="."){
    clearlast();
}
return true;
}
let showdisplay = x =>{
    if(filter(x)){
        display.innerHTML += x;
    }
}

function clearall(){
    display.innerHTML="";
}
let clearlast=_=>{
    display.innerText=display.innerText.substr(0,display.innerText.length-1)
}
function calc(){
    let current = display.innerText;
    let lastchar = current[current.length-1];
    if(!operators.includes(lastchar)){
        display.innerText = eval(display.innerText);
    }
}
key.addEventListener("click",function(){
    if(display.innerText.length>10){
        display.style.fontSize=30+"px"
    }else if(display.innerText.length>5){
        display.style.fontSize=60+"px"
    }
})