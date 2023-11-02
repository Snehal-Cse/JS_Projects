
let hrs = document.querySelector(".hrs")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")


setInterval(()=>{
    let date = new Date();
    let hours = date.getHours();
    hrs.textContent = (hours<10?"0":" ")+hours;
    let minutes = date.getMinutes();
    min.textContent =(minutes<10?"0":" ")+ minutes;
    let seconds = date.getSeconds();
    sec.textContent =(seconds<10 ?"0":" ")+ seconds;
},1000);