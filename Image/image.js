const accessKey = "7mPlQDqJIesuTpNJBTgrjoW0iyOT0_qWsNcDQTw2lwU";
const form = document.querySelector("form")
const search = document.querySelector(".container .entry");
const btn = document.querySelector(".container .btn");
const searchResults = document.querySelector(".search-results");
const showMore = document.querySelector(".showMore");
let inputValue = "";
let page = 1;
searchImages();
async function searchImages(){
    const inputValue = search.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputValue}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if(page === 1){
        searchResults.innerHTML = "";
    }
 
    results.map((result)=>{
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add("search-result");
        const image = document.createElement('img');
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const link = document.createElement('a');
        link.href = result.links.html;
        link.target = "_blank"
        link.textContent = result.alt_description;
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(link);
        searchResults.appendChild(imageWrapper);
    })
    page++;
    if(page>1 ){
        showMore.style.display = "block";
    }
}
form.addEventListener("submit",(e)=>{
e.preventDefault();
page = 1;
searchImages();
})
showMore.addEventListener("click",(e)=>{
    searchImages();
})