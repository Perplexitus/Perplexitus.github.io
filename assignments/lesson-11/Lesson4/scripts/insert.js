$(function(){
    // jQuery Code goes here

    var box1 = $('.box1');
    var box2 = $('.box2');

    //Move Right
    function LeftToRight() {
        if (box2.html() == '') {
            //Get from box1 and move to box2
            //Empty box 1
            box2.html(box1.html() );
            box1.html('');
        }
    }

    //Move Left
    function RightToLeft() {
        if (box1.html() == '') {
            //Get from box2 and move to box1
            //Empty box 2
            box1.html(box2.html() );
            box2.html('');
        }
    }


    //Assigm Buttons
    $('#LeftToRight').click(LeftToRight);
    $('#RightToLeft').click(RightToLeft);

})
