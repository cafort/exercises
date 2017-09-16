$(document).ready(function () {

    //Part 2
    $('#btnShow').on('click', show1);

    function show1() {
        $('.display-basic').show();
    }

    $('#btnHide').on('click', hide1);

    function hide1() {
        $('.display-basic').hide();
    }

    $('#btnToggle').on('click', toggle1);

    function toggle1() {
        $('.display-basic').toggle();
    }

    //Part 3
    $('.part3').show();

    //Part 4
    $('#btnFadeIn').on('click', fadein1);
    function fadein1(){
        $('.display-fade').fadeIn('fast');
    }

    $('#btnFadeOut').on('click', fadeout1);
    function fadeout1(){
        $('.display-fade').fadeOut('slow');
    }
    
    $('#btnFadeToggle').on('click', fadetoggle1);
    function fadetoggle1(){
        $('.display-fade').fadeToggle();
    }

    //Part 5
    $('#btnSlideDown').on('click', slidedown);
    function slidedown(){
        $('.display-slide').slideDown(1000);
    }

    $('#btnSlideUp').on('click', slideup);
    function slideup(){
        $('.display-slide').slideUp(500);
    }

    $('#btnSlideToggle').on('click', slidetoggle);
    function slidetoggle(){
        $('.display-slide').slideToggle(500);
    }


});