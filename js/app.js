/**
 * Created by emnetgossaye on 11/24/14.

 */
"use strict";


$(document).ready(function() {

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceHolder = $('.nav-placeholder');
    navPlaceHolder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop();

        if (scrollPos > navTop) {
            nav.addClass('nav-fixed');
            navPlaceHolder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceHolder.hide();
        }
    });

    var slideSwitch = $("[name='my-checkbox']");

    slideSwitch.bootstrapSwitch('onText', 'English');
    slideSwitch.bootstrapSwitch('offText', 'Spanish');
    slideSwitch.on('switchChange.bootstrapSwitch', function(event, state) {
        if(state) {
            $('#english-lang').css('display', 'block');
            $('#spanish-lang').css('display', 'none');
           
            //show english
        }

        else {
            $('#english-lang').css('display', 'none');
            $('#spanish-lang').css('display', 'block');
            //show spanish
        }


    });



});
$('.carousel').carousel({
    interval: 3000
})



