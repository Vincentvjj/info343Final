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
    $('#submit-button').click(onSubmit);
    
    function onSubmit(eventObj) {
        var name = $('#name-input').val();
        var email = $('#email-input').val();
        var subject = $('#subject-input').val();
        var message = $('#message-input').val();
        var valid = true;
        try {
            valid = validateForm(this);
        }
        catch(exception) {
            valid = false; //stop form submission to see error
        }
        if (!valid && eventObj.preventDefault) {
            eventObj.preventDefault(); 
        }
        //use new standard preventDefault() if available
    
        event.returnValue = valid; //for older browsers
        return valid;
        
        function validateForm() {
            var validation = true;
            if(!name) {
                validation = false;
                $('#name-input').css('form-control invalid-field');
            }
            else {
                $('#name-input').css('form-control');
            }
            if(!email) {
                validation = false;
                $('#email-input').css('form-control invalid-field');
            }
            else {
                $('#email-input').css('form-control');
            }
            if(!subject) {
                validation = false;
                $('#subject-input').css('form-control invalid-field');
            }
            else {
                $('#subject-input').css('form-control');
            }
            if(!message) {
                validation == false;
                $('#message-input').css('form-control invalid-field');
            }
            else {
                $('#message-input').css('form-control');
            }
            return validation;
        }
    };
    
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
                slideSwitch.bootstrapSwitch('labelText', 'English&#8592');
                //show spanish
            }

        });
    }

    
});
$('.carousel').carousel({
    interval: 3000
})



