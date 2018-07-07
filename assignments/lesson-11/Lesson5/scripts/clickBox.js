$(function(){
    // jQuery Code goes here
   /*
    $('.boxHolder').on('click', 'li', function () {
        $(this).addClass('greenBox');
    })

    $('.boxHolder').on('dblclick', 'li', function () {
        $(this).addClass('orangeBox');
    })

    */

    //Orange and Green click

    $('.boxHolder').on({
          click: function() {
            //Click Handler
            $(this).addClass('greenBox').html($(this).index());
        },
        dblclick: function() {
            //DblClick handler
            $(this).addClass('orangeBox').html($(this).index());

        },
        mouseenter: function() {
            //When mouse hoves
            $(this).css('opacity', 0.3);
        },
        mouseleave:function() {
            //when mouse leaves
            $(this).css('opacity', 1.0)
        }
    }, "li")




})
