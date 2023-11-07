  const listContainer = document.querySelector(".listContainer");
  const list = document.querySelector(".list");
  const btn = document.querySelector(".btn");
  btn.addEventListener("click",(e)=>{
    if(list.value === ""){
        alert("you must write something");
    }
    else{
      let li = document.createElement("li");
      li.textContent = list.value;
      listContainer.appendChild(li);  
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
      e.preventDefault();
    }
    list.value = "";
    e.preventDefault();
    saveData();
  })

listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName === "LI"){
       e.target.classList.toggle("checked");
       saveData();
    }
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();