

function toggleMenu() {
    document.getElementsByClassName("navbar")[0].classList.toggle("responsive");
}



function navActive() {
//Active link shows different color.

// Get the container element


// Get all buttons with class="btn" inside the container
var btns = document.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("navActive");
        current[0].className = current[0].className.replace(" navActive", "");
        this.className += " navActive";
    });
}
}
