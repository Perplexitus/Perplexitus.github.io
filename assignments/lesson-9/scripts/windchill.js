var ft = (parseInt(document.getElementById("franklin-high-number").innerHTML) + parseFloat(document.getElementById("franklin-low-number").innerHTML)) / 2;

var fs = parseInt(document.getElementById("franklin-windSpeed").innerHTML);

document.getElementById("franklin-windchill").innerHTML = Math.round(35.74 + 0.6215 * ft - 35.75 * Math.pow(fs, 0.16) + 0.4275 * ft * Math.pow(fs,0.16));




/* Springfield Windchill */
var st = (parseInt(document.getElementById("springfield-high-number").innerHTML) + parseFloat(document.getElementById("springfield-low-number").innerHTML)) / 2;

var ss = parseInt(document.getElementById("springfield-windSpeed").innerHTML);

document.getElementById("springfield-windchill").innerHTML = Math.round(35.74 + 0.6215 * st - 35.75 * Math.pow(ss, 0.16) + 0.4275 * st * Math.pow(ss,0.16));



/* Greenville */
var gt = (parseInt(document.getElementById("greenville-high-number").innerHTML) + parseFloat(document.getElementById("greenville-low-number").innerHTML)) / 2;

var gs = parseInt(document.getElementById("greenville-windSpeed").innerHTML);

document.getElementById("greenville-windchill").innerHTML = Math.round(35.74 + 0.6215 * gt - 35.75 * Math.pow(gs, 0.16) + 0.4275 * gt * Math.pow(gs,0.16));
/*
f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
f = wind chill factor in F
t is air average temp in F
s in wind speend in mph
*/
