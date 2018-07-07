$(function(){
// jQuery Code goes here

    //toggleStyle
    toggleStyle = function() {

        var inputFields =  $('input[type="text"]');

        if( inputFields.css('background-color') === 'rgb(255, 0, 0)' ) {
            //Set background color to white
            inputFields.css('background-color', 'rgb(255, 255, 255)');
        } else {
            //set it to red
            inputFields.css('background-color', 'rgb(255, 0, 0)');
        }
    }

    $('#ReqAQuoteBtn').click( toggleStyle );




    //Append unordered list
    $('.coreValues').append("<li><strong>This is NEW</strong></li>");
    //Appendto
    $("<li><strong>This is one is also cool...</strong></li>").appendTo('.coreValues');


    //Prepend
    $('.coreValues').prepend("<li><strong>This is NEW</strong></li>");
    //Prependto
    $("<li><strong>This is one is also cool...</strong></li>").prependTo('.coreValues');


    //val()
    var nameVal = $('input[name="nameVal"]');

    function FillEmpty() {
        if(nameVal.val() == "" ) {
            nameVal.val("John Doe");
        }
    }
    $('#ReqAQuoteBtn').click(FillEmpty);




console.log( $('input[type="text"]').css('background-color') );
})
