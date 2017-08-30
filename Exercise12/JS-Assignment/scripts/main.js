function update() {
    /* ===================
        Your code starts here
    =====================*/

    //Create new array.
    var messages = [];

    //If first name is empty. Add it to the array
    var firstName = getValue('firstName');
    if (firstName.length === 0) {
        messages.push('First Name is required');
    };

    //If last name is empty. Add it to the array
    var lastName = getValue('lastName');
    if (lastName.length === 0) {
        messages.push('Last Name is required');
    };

    //Email is empty. Add it to the array
    var emailAddress = getValue('emailAddress');
    if (emailAddress.length === 0) {
        messages.push('Email Address is required');
    };

    console.log(messages);


    //Loop through array. 
    if (messages.length !== 0) {
        var html = '<ul>';
        for (var i = 0; i < messages.length; i++) {
            html += '<li>' + messages[i] + '</li>'
        };
        html += '</ul>';
        document.getElementById('error-list').innerHTML = html;
    };


    //Create javascript object for the user
    var user = {
        firstname: firstName,
        lastname: lastName,
        email: emailAddress,
        fullname: function () {
            return this.firstname + ' ' + this.lastname;
        },
    };

    //log the user object to the console
    console.log('User object: ' + user);
    console.log('Full name: ' + user.fullname());

    //Check to see if everything is valid
    if (messages.length === 0) {
        //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
        var submittedDate = new Date().toDateString();
        //Make the alert box.
        alert('Submitted on ' + submittedDate);
    };

    /* ===================
        Your code ends here
    =====================*/


}
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}