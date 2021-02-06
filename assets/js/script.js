$(document).ready(function () {

    //Current Date via moment.JS
    const currentDay = moment().format("MMMM Do YYYY");

    //API call for Current City Search
    const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

    //MY API key 
    const myKey = "&appid=6277480031780c20e494b59b5119d621";

    var cityName = document.getElementById("#city-name");
    var searchBtn = document.getElementById("#search");
    var cities = document.getElementById("#city-list");
    var currentCity = document.getElementById("#city");
    var currentTemp = document.getElementById("#temperature");
    var currentHumidity = document.getElementById("#humidity");
    var currentWinds = document.getElementById("#winds");
    var uvIndex = document.getElementById("#UV-index");
    var forecast = document.getElementById("#main-weather");
    var forecastImg = document.getElementById("#weather_image");

    function getCurrentWeather() {
        var name = cityName.value;
        var currentWeather = weatherUrl + name + myKey;

        fetch(currentWeather)
            .then(function (response) {
                return response.JSON();
            })
            .then(function (weatherdata) {
                currentCity.innerHTML = weatherdata.name + " (" + currentDay + ")";
                currentTemp.innerHTML = "Temperature : " + weatherdata.main.temp + " F";
                currentHumidity.innerHTML = "Humidity : " + weatherdata.main.humidity + " %";
                currentWinds.innerHTML = "Winds : " + weatherdata.main.wind.speed + " mph";
            });
    };

    searchBtn.addEventListener("click", getCurrentWeather);
});