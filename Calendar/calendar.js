const date = document.querySelector(".date");
const day=document.querySelector(".day");
const month=document.querySelector(".month");
const year=document.querySelector(".year");

const today=new Date();
const weekDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
date.textContent= (today.getDate()<0?"0":"")+ today.getDate();
day.textContent= weekDays[today.getDay()];
month.textContent= months[today.getMonth()];
year.textContent= today.getFullYear();