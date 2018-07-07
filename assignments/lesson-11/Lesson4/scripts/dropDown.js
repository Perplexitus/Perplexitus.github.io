$(function(){
    // All jQuery code goes here

    /*
    $('.dropdownMenu > li').hover( function() {
        //hover
        $(this).children("ul").slideDown(200);

    }, function() {
        $(this).children("ul").slideUp(200);

    })
    */

    $('.dropdownMenu > li').hover( function() {
        //hover
        $(this).children("ul").slideToggle(200);
    })
})
