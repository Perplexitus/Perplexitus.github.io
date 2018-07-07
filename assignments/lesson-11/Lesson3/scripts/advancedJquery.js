$(function(){
    // Advanced filters
    $('li:first-of-type').css('background-color', 'rgb(248,95,95)');


    //Only of types
    $('li:only-of-type').css('background-color', 'rgb(48,95,95)');


    //Contains names
    $('li:contains("Crush")').css('background-color', 'rgb(248,195,95)');


    //Empty selections
    $('li:empty').css('background-color', 'rgb(0,0,0)');

    //Another tag as content
    $('li:has("h4")').css('background-color', 'rgb(248,95,195)');

    //Nth numbered
    $('li:nth-child(3)').css('background-color', 'rgb(0,95,195)');

})

