$(function () {
    // All jQuery code goes here

    $('#alcoveLogo').css('opacity', 0.4);

    $('.servicesBtn').css('color', '#FFF');


    //Red background color and border

    var elements = document.getElementsByTagName("h2");

    for(var i = 0; i < elements.length; i++) {
        elements[i].style.borderColor = "rgb(255,0,0)";
        elements[i].style.borderWidth = "2px";
        elements[i].style.borderStyle = "style";
        elements[i].style.backgroundColor = "rgb(255,0,0, 0.2)";
    }


    // QuerySelector

    var element = document.querySelector(".navigation > li:nth-child(3) > a");
    element.style.color = "rgb(255,255,0)";


    //QuerySelectorAll

    var queryAll = document.querySelectorAll(".navigation > li:nth-child(even) > a");
    for(i = 0; i < queryAll.length; i++) {
        queryAll[i].style.color = "rgb(255,0,0)";
    }

    //Alcove Logo
    $("#alcoveLogo").css("opacity", 0.4);
    //servicesBtn color to white
    $(".servicesBtn").css("color", "#fff");


    //button red
    $("button").css("border", '1px solid red');
    //h2
    $('h2').css('border', '1px solid red');

    //input tags
    $('input[name="nameVal"]').css('border', '1px red solid');
    // emailfield red
    $('input[name!="phoneNum"]').css('border', '1px solid red');
    //Phone field red
    $('input[name*="Num"]').css('border', '1px solid red');
    // Ends with the word "Val"
    $('input[name$="Val"]').css('border', '1px solid red');



    //.next
    $("#alcoveLogo").next().css('background-color', 'rgba(255,0,0, 0.2)');
    //nextAll
    $(".box1").nextAll().css('background-color', 'rgba(255,0,0, 0.2)');
    //childselectors
    $(".header").children().css('background-color', 'rgba(255,100,0, 0.2)');
    //eq parent
    $(".navigation > li:eq(2)").parent().parent().parent().css('opacity', '0.3');
    //closest
    $(".servicesBtn").closest('div').css('background-color', 'rgba(55,0,100, 0.2)');



})
