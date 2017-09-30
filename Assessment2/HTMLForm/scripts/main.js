$(function() {
  $("#btnSubmit").on("click", submit);
  $("#btnReset").on("click", reset);

  //reset error messages button
  function reset() {
    $("#errorMessages").html("");
  }

  function submit() {
    //Create variables: Errors array and a variable for each input field
    var errors = [];
    var firstName = $("#firstName");
    var lastName = $("#lastName");
    var emailAddress = $("#emailAddress");
    var referral = $("#referral");
    var reason = $("#reason");
    var accept = $("#accept");
    //Console log inputs
    console.log(
      "First name: " +
        firstName.val() +
        " | Last name: " +
        lastName.val() +
        " | Email: " +
        emailAddress.val() +
        " | Referral: " +
        referral.val() +
        " | Reason: " +
        reason.val() +
        " | Accept terms? " +
        accept.prop("checked")
    );

    //Basic validation function
    function validateFilled(field, errorMessage) {
      if (field.val() === "") {
        errors.push(errorMessage);
        field.addClass("invalid");
      }
    }

    //Run basic validation on each field
    validateFilled(firstName, "First name is required");
    validateFilled(lastName, "Last name is required");
    validateFilled(referral, "Referral is required");
    validateFilled(reason, "Please say why you want this blender");

    //validate email address
    if (
      emailAddress.val() === "" ||
      emailAddress.val().indexOf("@") === -1 ||
      emailAddress.val().indexOf(".com") === -1
    ) {
      errors.push("Email address must be filled out and contain @ and .com");
      emailAddress.addClass("invalid");
    }

    //Check whether terms and conditions was accepted
    if (accept.prop("checked") === false) {
      errors.push("Please accept the terms and conditions");
      accept.addClass("invalid");
    }

    //Create html for error messages
    html = "<ul>";
    for (var i = 0; i < errors.length; i++) {
      html += "<li>" + errors[i] + "</li>";
    }
    html += "</ul>";

    $("#errorMessages").html(html);

    console.log(errors);

    //Bonus: Serialize form and post to fake endpoint.
    //Couldn't get the serializer to work on the whole form though :(
    var postObj = $("#mainform").serialize();
    console.log(postObj);
    $.post("/AddEntry", postObj, function() {
      console.log("Form submitted successfully");
    });
  }
});
