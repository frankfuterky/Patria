
//fade in paragraphs and images
$(window).on("load", function () { 
    const myVideo = document.getElementById("video");
myVideo.play();
    
    $(window).scroll(function () {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        var windowTop = $(this).scrollTop();
        $(".fade").each(function () {
            
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();
            
            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                    $(this).fadeTo(500, 1);
                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) {
                    $(this).fadeTo(500, 0);
                }
            }
        });

        $(".pulsimage").each(function () {
            var imageBottom = $(this).offset().top + $(this).outerHeight();

            if (imageBottom < windowBottom) {
                $(this).addClass("pulsating");
            } else {
                $(this).removeClass("pulsating");
            }
        })


        


        // play audio when 'visible'
        const mySound = document.getElementById("audio");
        const audioBottom = $(".audio-wrapper").offset().top + $(".audio-wrapper").outerHeight();

        if (audioBottom < windowTop) {
            mySound.play();
        }
        if (audioBottom >= windowTop) {
            mySound.pause();
        }

        
        //pause video when not visible
        const myVideo = document.getElementById("video");
        const videoBottom = $(".video-wrapper").offset().top + $(".video-wrapper").outerHeight();

        if (videoBottom <= windowTop) {
            myVideo.pause();
        }
        if (videoBottom > windowTop) {
            myVideo.play();
        }
    }).scroll(); //invoke scroll-handler on page-load
});

//scroll to the first

$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
