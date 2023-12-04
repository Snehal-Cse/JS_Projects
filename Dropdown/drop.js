let container = document.querySelector(".container");
let info = document.querySelector(".container .info");
let options = document.querySelectorAll(".hide .value");
let list = document.querySelector(".hide");
let arrowIcon = document.querySelector(".container i");

container.addEventListener("click",() => {
    list.classList.toggle("show");
    arrowIcon.classList.toggle("rotate");
}
)

for (option of options) {
    option.onclick = function () {
        info.textContent = this.querySelector("p").textContent;
        list.classList.toggle("show");
        arrowIcon.classList.toggle("rotate");
    }
}
