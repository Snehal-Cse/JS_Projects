 let text = document.querySelector(".details");
 let imgBox = document.querySelector(".imgBox");
 let qrImg = document.querySelector(".qrImg");
 let button = document.querySelector(".btn");
 button.addEventListener("click",()=>{
    if(text.value.length>0){
        qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
        imgBox.classList.add("showImg");

    }
    
    else{

        setTimeout(()=>{
            text.classList.add("error") ;
        },1000);
    }
 
 })