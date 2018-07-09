$(function(){
    // jQuery Code goes here
    $('input').on({
        focus:function() {
            $(this).addClass('focus');
        },
        blur:function(){
            $(this).removeClass('focus').removeClass('select');
        },
        select:function(){
            $(this).addClass('select');
        }
    })

    $('#accountType').change(function(){
        alert("You selected the " + $(this).val() + " Package !")
    })

})
