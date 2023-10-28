const button = document.querySelector(".inputBox button");
const pass = document.querySelector(".password");
const msg = document.querySelector(".msg");
const str = document.querySelector(".strength");

pass.addEventListener("input",()=>{
     if(pass.value.length>0){
        msg.style.display= "block";
     }
     else{
        msg.style.display= "none";
     }
     if(pass.value.length <4){
        str.textContent="weak";
        // str.style.color="red";
        msg.style.color="red";
        pass.style.borderColor="red";
     }
     else if(pass.value.length >= 4 && pass.value.length < 8){
        str.textContent="medium";
        // str.style.color="yellow";
        msg.style.color="yellow";
        pass.style.borderColor="yellow";
     }
     else if(pass.value.length >= 8){
        str.textContent="strong";
        // str.style.color="green";
        msg.style.color="green";
        pass.style.borderColor="green";
     } 
})