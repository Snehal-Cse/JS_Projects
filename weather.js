

const apiKey = "40301b96d9300497465cf0f1e5038dd6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cityDisplay = document.querySelector(".city");
const tempDisplay = document.querySelector(".temp");
const humidityDisplay = document.querySelector(".num2");
const windDisplay = document.querySelector(".num1");
const weatherIcon = document.querySelector(".weather-icon");
const weather =document.querySelector(".weather");

async function checkWeather(city) {
   
        const response = await fetch(apiURL + city + `&appid=${apiKey}`);
        const data = await response.json();
        console.log(data);

        cityDisplay.textContent = data.name;
        tempDisplay.textContent = Math.round(data.main.temp) + "°C";
        humidityDisplay.textContent = data.main.humidity + "%";
        windDisplay.textContent = data.wind.speed + "km/h";

        if(data.weather[0].main=="Rain"){
          weatherIcon.src="rain.png"; 
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="mist.png"; 
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="sunny.png"; 
        }
        else {
            weatherIcon.src="image.png";
        }
        
        
    } 


searchBtn.addEventListener("click", () => {
    checkWeather(search.value);
});
