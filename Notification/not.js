let box1 = document.querySelector(".btn1");
let box2 = document.querySelector(".btn2");
let box3 = document.querySelector(".btn3");
let bigBox = document.querySelector(".Toast-Box"); 
box1.addEventListener("click",()=>{
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = '<i class="fa-solid fa-check"></i>  Successfully submitted' ;
  toast.style.color="green"
  bigBox.appendChild(toast);
  setTimeout(() => {
    toast.remove();
  }, 5000)
  
})
box2.addEventListener("click",()=>{
    let toast = document.createElement("div")
    toast.classList.add("toast");
    toast.innerHTML='<i class="fa-solid fa-xmark"></i>  Please fix the error'
    toast.style.color="red"
    bigBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000)
})
box3.addEventListener("click",()=>{
    let toast = document.createElement("div")
    toast.classList.add("toast");
    toast.innerHTML='<i class="fa-solid fa-exclamation"></i>  Invalid input, check again'
    toast.style.color="blue"
    bigBox.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 5000)
})                              












