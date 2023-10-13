const impPop = document.querySelector(".popup");
const sub = document.querySelector(".btn");
const okay = document.querySelector(".btn2");
sub.addEventListener("click",()=>{
 impPop.classList.add("popupOpen");

});
okay.addEventListener("click",()=>{
impPop.classList.remove("popupOpen");
});

