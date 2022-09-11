let tens = 00;
let seconds = 00;
let minute = 00;
const sec = document.querySelector("#seconds");
const ten = document.querySelector('#tens');
const min = document.querySelector("#minutes");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const lap = document.querySelector("#lap");
const reset = document.querySelector("#restart");
const clear = document.querySelector("#clear");
const list = document.querySelector("#list");
const timer = document.querySelector(".stop-watch #Timer")
let interval;
function startTimer(){
    tens++;
    if(tens <= 9){
        ten.innerText = "0"+tens;
    }
    if(tens > 9){
        ten.innerText = tens;
    }
    if(tens > 99){
        seconds++;
        sec.innerText = "0"+seconds;
        tens = 0;
        ten.innerText = "0"+tens;
    }
    if(seconds > 9){
        sec.innerText = seconds;
    }
    if(seconds > 59){
        minute++;
        min.innerText = "0"+minute;
        seconds = 0;
        sec.innerText = "0"+seconds;
    }
    if(minute > 9){
        min.innerText = minute;
    }
}

start.addEventListener("click",()=>{
    clearInterval(interval);
   interval =  setInterval(startTimer,10)
})

function btnone(){
    list.innerHTML +=`<li>${timer.innerText}</Li>`
}

reset.addEventListener("click",()=>{
    tens = 00;
    seconds = 00;
    minute = 00;
    ten.innerText = "00";
    min.innerText = "00";
    sec.innerText ="00";
    clearInterval(interval);
})

clear.addEventListener("click",()=>{
    list.innerHTML ="";
})

stop.addEventListener("click",()=>{
    clearInterval(interval);
})