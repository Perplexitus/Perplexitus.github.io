/* API:
https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=f828eb17d1ed42810e56b27db4b641da&units=imperial
*/

let weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=f828eb17d1ed42810e56b27db4b641da&units=imperial", true);
weatherRequest.send();
weatherRequest.onload = function () {
    // --------- FRANKLIN --------- //
    var weather = JSON.parse(weatherRequest.responseText);
    var windD = weather.wind.deg;
    console.log(weather);

    document.getElementById("franklin-temp-temp").innerHTML = weather.main.temp;
    document.getElementById("franklin-high-number").innerHTML = weather.main.temp_max;
    document.getElementById("franklin-low-number").innerHTML = weather.main.temp_min;
    document.getElementById("franklin-windSpeed").innerHTML = weather.wind.speed;
    if (windD >= 0) {
        windD = "N";
    } else if (windD >= 45) {
        windD = "NW";
    } else if (windD >= 90) {
        windD = "E";
    } else if (windD >= 135) {
        windD = "SE";
    } else if (windD >= 180) {
        windD = "S";
    } else if (windD >= 225) {
        windD = "SW";
    } else if (windD >= 270) {
        windD = "W";
    } else if (windD >= 315) {
        windD = "NW";
    } else {
        windD = "N";
    }
    document.getElementById("franklin-windDirection").innerHTML = windD;
    document.getElementById("franklin-description").innerHTML = weather.weather[0].description;
    document.getElementById("franklin-icon").innerHTML = "<img + src=" + "'http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>";

}


// ---- Town Facts ---
var townRequest = new XMLHttpRequest();
townRequest.open("GET", "https://byui-cit230.github.io/weather/data/towndata.json");
townRequest.send();
townRequest.onload = function () {
    var towns = JSON.parse(townRequest.responseText);
    console.log(towns);

    document.getElementById("franklin-founded").innerHTML = towns.towns[0].yearFounded;
    document.getElementById("franklin-motto").innerHTML = towns.towns[0].motto;
    document.getElementById("franklin-population").innerHTML = towns.towns[0].currentPopulation;
    document.getElementById("franklin-rainfall").innerHTML = towns.towns[0].averageRainfall;


    // Springfield
    document.getElementById("springfield-founded").innerHTML = towns.towns[3].yearFounded;
    document.getElementById("springfield-motto").innerHTML = towns.towns[3].motto;
    document.getElementById("springfield-population").innerHTML = towns.towns[3].currentPopulation;
    document.getElementById("springfield-rainfall").innerHTML = towns.towns[3].averageRainfall;


    //Greenville
    document.getElementById("greenville-founded").innerHTML = towns.towns[1].yearFounded;
    document.getElementById("greenville-motto").innerHTML = towns.towns[1].motto;
    document.getElementById("greenville-population").innerHTML = towns.towns[1].currentPopulation;
    document.getElementById("greenville-rainfall").innerHTML = towns.towns[1].averageRainfall;


}
