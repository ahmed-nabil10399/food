$(document).ready(function(){

    $('header .owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    // ********************
    // ********************
    // ********************

    // add class search 
    $('nav .links .fa-search').click(function () {
        $('.search-popup').addClass('show')
    })
    // remove class search 
    $('.search-popup .close-search').click(function () {
        $('.search-popup').removeClass('show')
    })
    // ///////
    // add class search 
    $('nav .links .fa-user').click(function () {
        $('.login-popup').addClass('show')
    })
    // remove class search 
    $('.login-popup .close-search').click(function () {
        $('.login-popup').removeClass('show')
    })

    
    // ********************
    // ********************
    // ********************

    // add class active >> #navbar 
    $(window).scroll(function () {
        
        if(this.scrollY > 50) {
        
        $('nav').addClass("active");
        
        } else {
        
        $('nav').removeClass("active");
        }
    })

    // ********************
    // ********************
    // ********************

    // scrolltop >> up 
    $('.scroll-up').click(function () {
        $('body, html').animate({
            scrollTop:0
        },50)
    });

      // show || hide btn scroll up
    $(window).scroll(function () {
        if($(window).scrollTop() > 500){
            $('.scroll-up').fadeIn(500);
        } else {
            $('.scroll-up').fadeOut(500)
        }
    });

    // ********************
    // ********************
    // ********************

    

    if ($(window).width() < 767) {
        $('nav').addClass('media');
    } else {
        $('nav').removeClass('media');
        } ;

    $(window).resize(function () {
        if ($(window).width() < 767) {
            $('nav').addClass('media');
        } else {
            $('nav').removeClass('media');
        }
    }) 

    // /88888888888888888
    // /88888888888888888

    $('.spnas-show-links').click(function () {
        $('nav .links').toggleClass('actived');
    })


        
    // ********************
    // ********************
    // ********************

    $('.sliders .owl-carousel').owlCarousel({
        loop:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })




});