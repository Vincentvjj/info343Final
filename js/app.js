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
            nav.PlaceHolder.show();
        }
        else {
            nav.removeClass('nav-fixed');
            navPlaceHolder.hide();
        }
    });

});
$('.carousel').carousel({
        interval: 3000
})