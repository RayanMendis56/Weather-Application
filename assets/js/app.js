const apiKey="4d8d2998b77a6d5b678491a34bf3ade5";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=mumbai";

async function checkWeather(){
    const response=await fetch(apiUrl+`&appid=${apiKey}`);
    var data=await response.json();
}