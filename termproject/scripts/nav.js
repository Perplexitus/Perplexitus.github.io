function navigation() {

$(function() {

    $('#navButton').click(function(){
        $('.navbar').slideToggle(250);
    }
    )})

$(function() {
    $(window).resize(function(){
        if ($(window).width() >= 600){
            $('navbar ul').slideDown(0);
        }
    }
)})

}

/*
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
/*
    $('.dropdownMenu > li').hover( function() {
        //hover
        $(this).children("ul").slideToggle(200);
    })
})
*/
