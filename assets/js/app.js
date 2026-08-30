
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkWeather(city){
    if(!city){
        alert("Please enter a city name");
        return;
    }

    try{
        const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
        var data=await response.json();

        if(response.status == 404){
            alert("City not found");
            return;
        }

        //console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+" km/h";

        const weatherType = data.weather[0].main;
        
        switch(weatherType){
            case "Clouds":
                weatherIcon.src="assets/images/clouds.png";
                break;
            case "Clear":
                weatherIcon.src="assets/images/clear-sky.png";
                break;
            case "Rain":
                weatherIcon.src="assets/images/heavy-rain.png";
                break;
            case "Drizzle":
                weatherIcon.src="assets/images/rainy-day.png";
                break;
            case "Mist":
                weatherIcon.src="assets/images/mist.png";
                break;
            case "Thunderstorm":
                weatherIcon.src="assets/images/thunderstorm.png";
                break;
            default:
                weatherIcon.src="assets/images/rainy-day.png";
        }
    }catch(error){
        console.error("Error fetching weather:", error);
        alert("Error fetching weather data");
    }

    document.querySelector(".weather").style.display="block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

searchBox.addEventListener("keypress", (event)=>{
    if(event.key === "Enter"){
        checkWeather(searchBox.value);
    }
})

