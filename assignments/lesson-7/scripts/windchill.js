var t = (parseInt(document.getElementById("temp-high-number").innerHTML) + parseFloat(document.getElementById("temp-low-number").innerHTML)) / 2;

var s = parseInt(document.getElementById("temp-windSpeed").innerHTML);

document.getElementById("windchill").innerHTML = Math.round(35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s,0.16));




document.getElementById("jsTest").innerHTML = "Testing JavsScript :)";

/*
f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
f = wind chill factor in F
t is air average temp in F
s in wind speend in mph
*/
