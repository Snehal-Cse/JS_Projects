
let controller = document.querySelector(".controller");
let music = document.querySelector(".music");
let ctrlIcon = document.querySelector(".ctrlIcon");
music.onloadedmetadata  = function(){
   controller.max = music.duration;
   controller.value = music.currentTime 
}
ctrlIcon.addEventListener("click",()=>{
if(ctrlIcon.classList.contains("fa-pause")){
    music.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
}
else{
    music.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause"); 
}
})
music.onplay = function() {
    setInterval(() => {
        controller.value = music.currentTime;
    }, 500);
};

controller.oninput = function(){
    music.play();
    music.currentTime = controller.value;
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
}


