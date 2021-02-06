$(document).ready(function () {
    //Trying the method from demo; removes error msgs in console, but still no functionality
    //MY API key 
    const myKey = "&appid=6277480031780c20e494b59b5119d621";



    //Current Date via moment.JS
    const currentDay = moment().format("MMMM Do YYYY");

    //API call for Current City Search
    //const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

    var cityName = document.getElementById("city-name");
    var cities = document.getElementById("city-list");
    var currentCity = document.getElementById("city");
    var currentTemp = document.getElementById("temperature");
    var currentHumidity = document.getElementById("humidity");
    var currentWinds = document.getElementById("winds");
    var uvIndex = document.getElementById("UV-index");
    var forecast = document.getElementById("main-weather");
    var forecastImg = document.getElementById("weather_image");

    //Search Button
    $("#search").on("click", function () {

        getCurrentWeather();
    })

    //Gets current weather from Openweathermap
    function getCurrentWeather() {
        console.log("Your Search")
        var name = cityName.value;
        const weatherUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
        console.log(weatherUrl)

        //API Call
        var currentWeather = weatherUrl + name + myKey;

        fetch(currentWeather)
            .then(function (response) {
                return response.json();
            })
            .then(function (weatherdata) {
                currentCity.innerHTML = weatherdata.name + " (" + currentDay + ")";
                currentTemp.innerHTML = "Temperature : " + weatherdata.main.temp + " F";
                currentHumidity.innerHTML = "Humidity : " + weatherdata.main.humidity + " %";
                currentWinds.innerHTML = "Winds : " + weatherdata.wind.speed + " mph";

            });
    };

    //UV Index

    //Local Storage
    cities.textContent = "";

    var cityQuery = localStorage.getItem("cityName");
    if (cityQuery === null) {
        cityQuery = [];
    } else {
        cityQuery = JSON.parse(cityQuery);
    }
    cityQuery.push(cityName);
    var pastCities = JSON.stringify(cityQuery);
    localStorage.setItem("cityName", pastCities);

    //for (i = 0; i < cityQuery.length; i++);
    //var prevCities

    $("clear").click(function () {
        localStorage.clear();
        cityList.removeChild(pastCities);
    })
})
