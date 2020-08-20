$(document).ready(function () {
    $('.khoi-anh').slick(
        {
            arrows:false,
            autoplay: true,
            autoplaySpeed: 700,
        }
    );

    $('.khoi-anh-2').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1500,
    });

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
    
    $(window).scroll(function () { 

        // window.pageYOffset >= 200

        if (window.pageYOffset >= 150) {
            $('.content-1').addClass('ra-vao');
        } else {
            $('.content-1').removeClass('ra-vao');
        }

    });

    $(window).scroll(function () { 
        // window.pageYOffset >= 200
        if (window.pageYOffset >= 600) {
            $('.information').addClass('di-vao');
        } else {
            $('.information').removeClass('di-vao');
        }
    });

    $('.back-to-top').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: 0
        },1500, )
        
    });

    $('.home').click(function (e) { 
        e.preventDefault();
        
        $('html').animate({
            scrollTop: 0
        }, 3000, );
    });

    // $('.about').click(function (e) { 
    //     e.preventDefault();

    //     $('html').animate({
    //         scrollTop: $('.information').offset().top - 30
    //     }, 1000, );
    // });

    // $('.logo').click(function (e) { 
    //     e.preventDefault();

    //     $('html').animate({
    //         scrollTop: $('.khoi-1').offset().top + 70
    //     }, 1000, );
    // });

    // $('.project').click(function (e) { 
    //     e.preventDefault();

    //     $('html').animate({
    //         scrollTop: $('.khoi-2').offset().top + 210
    //     }, 1000, );
    // });

    $('.contact').click(function (e) { 
        e.preventDefault();

        $('html').animate({
            scrollTop: $('.khoi-3').offset().top + 40
        }, 1000, );
    });

    
    $(window).scroll(function () { 
        // window.pageYOffset >= 200
        if (window.pageYOffset > 1000) {
            $('.slt').addClass('slt-di-vao');
        } else {
            $('.slt').removeClass('slt-di-vao');
        }
    });



    


});