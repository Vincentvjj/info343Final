/**
 * Created by emnetgossaye on 11/24/14.

 */
"use strict";


$(document).ready(function() {

    var nav = $('nav');
    var navTop = nav.offset().top;
    var navHeight = nav.outerHeight();
    var navPlaceHolder = $('.nav-placeholder');
    var slideSwitch = $("[name='my-checkbox']");



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

    if(document.getElementById("contact-form")) {
        document.getElementById("contact-form").addEventListener("submit", onSubmit);
    }   

    if($("p a[href='#top']")) {
        $('p a[href!="#top"]').attr('target', '_blank');
        $("p a[href='#top']").click(function(eventObject) {
            var targetElement = $(this.hash);
            $('html, body').animate({
                scrollTop: targetElement.offset().top - navHeight
            }, 700)
            eventObject.preventDefault(); 
        });

    } else {
        return;
    }


        


    if(slideSwitch.length == 0) {
        return;
    }

    else {
        slideSwitch.bootstrapSwitch('onText', 'English');
        slideSwitch.bootstrapSwitch('offText', 'Spanish');
        slideSwitch.bootstrapSwitch('labelText', 'Spanish&#8594;');

        slideSwitch.on('switchChange.bootstrapSwitch', function(event, state) {
            if(state) {
                $('#english-lang').css('display', 'block');
                $('#spanish-lang').css('display', 'none');
                slideSwitch.bootstrapSwitch('labelText', 'Spanish&#8594');
                //show english
            }

            else {
                $('#english-lang').css('display', 'none');
                $('#spanish-lang').css('display', 'block');
                slideSwitch.bootstrapSwitch('labelText', '&#8592English');
                //show spanish
            }

        });
    }
    
});



function onSubmit(evt) {
    evt.returnValue = validateForm(this);
    if (evt.returnValue == false && evt.preventDefault) {
    evt.preventDefault();
    }

    return evt.returnValue;
}


function validateForm(form) {
    var requiredFields = ['name', 'email', 'subject', 'message'];
    var formValid = true;

    for(var i = 0; i < requiredFields.length; i++) {
        formValid &= validateRequiredField(form.elements[requiredFields[i]]);
    }


    return formValid;
} 

function validateRequiredField(field) {
    var value = field.value.trim();
    var valid = value.length > 0;
    if(valid) {
        field.className = "form-control";

    }

    else {
        field.className = "form-control invalid-field";
    }

    return valid;


}

$('.carousel').carousel({
    interval: 3000
})



