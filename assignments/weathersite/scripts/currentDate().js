function currentDate() {
var date = new Date();

//Ask date object for the day of the week.
var dayNumber = date.getDay();
//Make array for week days.
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

//Output day of the week.
document.getElementById("currentDate").innerHTML = weekDays[dayNumber] + ", " + date.getDate() + " " + monthNames[date.getMonth()] + " " + date.getFullYear();

}
