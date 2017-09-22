$(document).ready(function(){
    //Hide error messages
    $('.error').hide();
    
    //Set zebra stripes
    $('.input-group').filter(':even').addClass('even');

    //Validate inputs and fade error message in our out.
    function fader() {
        var input = $(this);

        if (input.val() === '') {
            console.log( this.name + ' is required');
            input.closest('div').find('.requiredMsg').fadeIn(200);
        } else {
            console.log( this.name + ' has been filled out')
            input.closest('div').find('.requiredMsg').fadeOut(200);
        }
    };
    
    //Validate first name on blur
    $(firstName).on('blur', fader);

    //Validate last name on blur
    $(lastName).on('blur', fader);

    //Validate email on blur
    $(emailAddress).on('blur', function(){
        var input = $(this);
        //Check for input
        if (input.val() === '') {
            console.log( this.name + ' is required');
            input.closest('div').find('.requiredMsg').fadeIn(200);
            $('.emailMsg').fadeOut(200);
            //Email must contain @ and .com
        } else if (input.val().indexOf('@') === -1 || input.val().indexOf('.com') === -1) {
            console.log('Email is missing @ or .com')
            input.closest('div').find('.requiredMsg').fadeOut(200);
            $('.emailMsg').fadeIn(200);
        } else {
            console.log( this.name + ' has been filled out')
            input.closest('div').find('.requiredMsg').fadeOut(200);
            $('.emailMsg').fadeOut(200);
        }
    });

});