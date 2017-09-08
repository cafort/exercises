//Add event listeners to submit and reset buttons
document.getElementById("submit").addEventListener("click", submitForm);
document.getElementById("reset").addEventListener("click", resetForm);

function submitForm() {
  var messages = [];
  var name = document.getElementById("fullName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var timezone = document.getElementById("timeZone");
  var terms = document.getElementById("termsAccept");
  //Check name
  if (name.value.length === 0) {
    messages.push("Full Name Required");
    name.classList.add("invalid");
  } else {
    name.classList.remove("invalid");
  }
  //Check email
  if (email.value.length === 0 || email.value.indexOf("@") === -1) {
    messages.push("Please enter a valid email address");
    email.classList.add("invalid");
  } else {
    email.classList.remove("invalid");
  }
  //check password
  if (password.value.length === 0) {
    messages.push("Please enter a password");
    password.classList.add("invalid");
  } else {
    password.classList.remove("invalid");
  }
  //check time zone
  if (timezone.value.length === 0) {
    messages.push("Time Zone is required");
    timezone.classList.add("invalid");
  } else {
    timezone.classList.remove("invalid");
  }

  //Check if terms and conditions accepted
  if (terms.checked === false) {
    messages.push("Please accept terms and conditions");
    terms.classList.add("invalid");
  } else {
    terms.classList.remove("invalid");
  }
  //Add messages to html body if there are errors
  if (messages.length > 0) {
    var html = "<ul>";
    for (var i = 0; i < messages.length; i++) {
      html += "<li>" + messages[i] + "</li>";
    }
    html += "</ul>";
    document.getElementById("message").innerHTML = html;
  } else {
    document.getElementById("message").innerHTML =
      "Form submitted successfully";
  }
}

//Reset form including values, messages and styles
function resetForm() {
  var name = document.getElementById("fullName");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var timezone = document.getElementById("timeZone");
  var terms = document.getElementById("termsAccept");
  name.value = "";
  email.value = "";
  password.value = "";
  timezone.value = "";
  terms.checked = false;
  name.classList.remove("invalid");
  email.classList.remove("invalid");
  password.classList.remove("invalid");
  timezone.classList.remove("invalid");
  terms.classList.remove("invalid");
  document.getElementById("message").innerHTML = "";
}
