const form = document.querySelector("form");
const container = document.querySelector(".imageContainer")
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const query = form.querySelector("input").value;
    // console.log(query);
    if(query === " "){
        query = "the";
    }
    tvMazeApi(query);
})
async function tvMazeApi(query){
    const req = await fetch(` https://api.tvmaze.com/search/shows?q=${query}`)
    const res = await req.json();
   makeImages(res);
}
function makeImages(res){
     for(let movie of res){
         let src = movie.show.image.medium;
         const img= document.createElement("img");
         img.src = src;
         container.appendChild(img);
     }
}


