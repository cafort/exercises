/*
    Exercise 27 
*/
$(document).ready(function(){
    /*=======================
        Regular Expressions 
     =======================*/
    $("#btnvalidate").on("click", function(){
        //Get email form and create email pattern for regexp
        var emailInput = $("#email");
        var emailPat = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
       //make sure it's working
        console.log("Email checks out: " + emailPat.test(emailInput.val()));
       //If it doesn't check out, add invalid class
        if (emailPat.test(emailInput.val()) === false){
            emailInput.addClass("is-invalid");
        };

        //Get numeric input value
        var numericInput = $("#numeric")
        //Set number pattern
        var numberPat = /[a-z]/gi;
        var cleaned =  numericInput.val().replace(numberPat, '');
        console.log(cleaned);
        numericInput.val(cleaned);

    });






     /*=======================
       Array Methods 
     =======================*/
    //An array of numbers
    var numbers = [
        1, 3, 6, 9
    ];

    //Create a new array of the numbers squared
    var numbersSquared = numbers.map(function(e){
        return e * e;
    });
    
    console.log ("Original numbers: " + numbers);
    console.log("Nunbers squared: " + numbersSquared);

});