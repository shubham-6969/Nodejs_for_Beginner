// Weather App

import readline from "readline";

// OpenWeatherMap API Details

const API_KEY = "bcea81e0563f3c9a12448ffd55c8a8db";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Interface 
const rl = readline.createInterface({
    // Passing Property
    input : process.stdin,
    output : process.stdout
});

const getWeather = async (city)=> {
    const url = `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
   try {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('City not found. Please check your city name')
    }
    const weatherData = await res.json();
    console.log(weatherData);

    console.log(`\nWeather Information`);
    console.log(`City: ${weatherData.name}`);
    console.log(`Temperature: ${weatherData.main.temp}℃`);
    console.log(`Description: ${weatherData.weather[0].description}`);
    console.log(`Humidity: ${weatherData.main.humidity}%`);
    console.log(`Wind Speed💨: ${weatherData.wind.speed} m/s\n`);

   } catch (error) {
    console.log("Error",error.message);
   }
}



const city = rl.question('Enter the city name to get its weather:', async (city)=> {
    await getWeather(city);
    rl.close();
});

