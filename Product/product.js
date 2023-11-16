const image = document.querySelector(".image");
let btn = document.querySelectorAll(".btn1");
btn[0].addEventListener("click",()=>{
    image.src = "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/c/v/c/m-kzrn-kaztro-original-imagzr6jhmgn9fxd.jpeg?q=90"
    for(let bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
})
btn[1].addEventListener("click",()=>{
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDE26fb-djtVzdc9LsKRiHhsWkE5cSv1Sxsg&usqp=CAU"
    for(let bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
})
btn[2].addEventListener("click",()=>{
    image.src = "https://rukminim2.flixcart.com/image/850/1000/xif0q/t-shirt/c/x/i/xl-1101292mustard-navy-people-original-imagkjz5p7r5snyg.jpeg?q=90"
    for(let bt of btn){
        bt.classList.remove("active");
    }
    this.classList.add("active");
})