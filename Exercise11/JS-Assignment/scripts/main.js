var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here

    ///Bonus, removing invalid class at beginning of function.
    for (var i = 0; i < document.getElementsByClassName('invalid').length; i++){
        document.getElementsByClassName('invalid')[i].classList.remove('invalid');
    }

    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log('First name: ' + firstName);
    console.log('Last name: ' + lastName);
    
    document.getElementById('p1_fullName').innerHTML=firstName + ' ' + lastName;
    if (firstName !== '' && lastName !== '') {
        document.getElementById('p1_valid').innerHTML = true;
    } else {
        document.getElementById('p1_valid').innerHTML = false;
        document.getElementsByClassName('part-1')[0].classList.add('invalid'); //Set class to invalid if fasle
    };

    document.getElementById('p1_fullNameLength').innerHTML = firstName.length + lastName.length;

    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log('Email address: ' + emailAddress);
    document.getElementById('p2_email').innerHTML = emailAddress;
    console.log('Index of @ in email address is ' + emailAddress.indexOf('@')); // just checking indexOf functionality
    if (emailAddress.indexOf('@') > -1) {
        document.getElementById('p2_valid').innerHTML = true;
    } else {
        document.getElementById('p2_valid').innerHTML = false;
        document.getElementsByClassName('part-2')[0].classList.add('invalid')
    };
    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log('Random number: ' + randomNumber);
    document.getElementById('p3_number').innerHTML = randomNumber;
    //Check for NaN value or no entry
    if (isNaN(randomNumber) || randomNumber === '' ) {
        document.getElementById('p3_valid').innerHTML = false;
        document.getElementsByClassName('part-3')[0].classList.add('invalid')
    } else {
        document.getElementById('p3_valid').innerHTML = true;
    };




    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log('Array input' + arrayInput);
    arrayItems.push(arrayInput);
    console.log('Array items: ' + arrayItems);
    document.getElementById('p4_arraylength').innerHTML = arrayItems.length;
    document.getElementById('p4_valid').innerHTML = arrayItems;












    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

