/* API:
https://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID=f828eb17d1ed42810e56b27db4b641da&units=imperial
*/

let weatherRequest = new XMLHttpRequest();
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=f828eb17d1ed42810e56b27db4b641da&units=imperial";
weatherRequest.open('GET', apiUrl, true);
weatherRequest.send();
weatherRequest.onload = function() {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML =     weatherData.main.temp;

}
