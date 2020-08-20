$(document).ready(function () {
    $('.back-to-top').hide();    
    // hide đều đc

    $(window).scroll(function () { 

        // window.pageYOffset >= 200

        if (window.pageYOffset >= 150) {

            $('.back-to-top').fadeIn(); 
            
        } else {

            $('.back-to-top').fadeOut();
            
        }

    });
    

    $('.back-to-top').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: 0
        },1500, )
        
    });

    $('.contact').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi-3').offset().top + 20
        }, 1000, );
    });
});