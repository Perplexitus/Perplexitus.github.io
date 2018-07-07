$(function () {
    // This function calculates and returns the distance value
    function calculateDistance(x, y) {
        var symbolPositionX = 97;
        var symbolPositionY = 106;
        return Math.sqrt(((x - symbolPositionX) * (x - symbolPositionX)) + ((y - symbolPositionY) * (y - symbolPositionY)));
    }
    var statusDisplay = $('.status')

    $('.container').on ({
        mousemove: function(evt) {
            $('.coordinates').html(evt.offsetX + ',' + evt.offsetY);
            var distance = calculateDistance(evt.offsetX, evt.offsetY);

            if (distance >30 ){
                statusDisplay.html("You're too far off!")
            }
            else if (distance > 20 && distance < 30) {
                statusDisplay.html("You're close!")
            }
            else if (distance > 10 && distance < 20) {
                statusDisplay.html("You're very close!")
            }
            else if (distance > 8 && distance < 10) {
                statusDisplay.html("Almost there!!!")
            }
            else if (distance >= 0 && distance < 8) {
                statusDisplay.html("CLICK NOW!!!!")
            }
        },
        click: function(evt) {
            if(calculateDistance(evt.offsetX, evt.offsetY) < 8) {
               statusDisplay.html("Congrats! You win!");
        }
        else {
        statusDisplay.html("You SUCK! Refresh the page and try again!! >:l");
        }
        $(this).off();
        },
        mouseleave: function() {
            statusDisplay.html("Find the Hand !");
            $('.coordinates').html('0,0')
        }
    })
        })
