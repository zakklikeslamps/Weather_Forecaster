$(document).ready(function () {

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

    //Current Date via moment.JS
    const currentDay = moment().format("MMMM Do YYYY");
    console.log(currentDay);



})