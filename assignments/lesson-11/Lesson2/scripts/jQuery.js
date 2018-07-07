$(function () {
    // All jQuery code goes here

    var elements = document.getElementsByTagName("h2");

    for (var i=0; i < elements.length; i++) {
        elements[i].style.borderColor = "rgb(255,0,0)";
        elements[i].style.borderWidth = "2px";
        elements[i].style.borderStyle = "solid";
        elements[i].style.backgroundColor = "rgb(255,0,0, 0.2)";


    }

    $('#alcoveLogo').css('opacity', 0.4);

    $('.servicesBtn').css('color', '#FFF');

    var element = document.querySelector(".navigation > li:nth-child(3) > a");
    element.style.color = "rgb(255,0,0)";
})
