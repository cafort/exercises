$(document).ready(function () {

    $("#btnSubmit").on("click", function () {
        var form = document.getElementById("form1");
        //Check form validity
        if (form.checkValidity() === true) {
            console.log("form is valid");
            //If form is valid, fade out form and fade in thank you message
            $(form).fadeOut(300, function () {
                $("#thankyou").fadeIn(300);
            });
        };
        form.classList.add('was-validated');
    });
});
