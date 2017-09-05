//Using an extra sample date to fail tests and to take advantage of the functions.
var sampleDates = [
    new Date('July 21, 2017, 22:31:31'),
    new Date('September 05, 1992, 10:04:01'),
    new Date('October 09, 1969, 18:15:01')
];

//Third date for each method intentionally wrong
var expectedResults = [
    '10:31 PM', // Short Time 1 pass
    '10:04 AM', //Short Time 2 pass
    '6:15 pm', //Short Time 3 fail
    '10:31:31 PM', //Long time 1 pass
    '10:04:01 AM', // Long time 2 pass
    '10:04 am', //Long time 3 fail
    '7/21/2017', // Short date 1 pass
    '9/5/1992', // Short date 2 pass
    'October 9, 1969', // Short date 3 fail
    'July 21, 2017', // Long date 1 pass
    'September 5, 1992', // Long date 2 pas
    '10/09/1969', //Long dae 3 fail
    '7/21/2017 10:31 PM', //Short date time 1 pass
    '9/5/1992 10:04 AM', // Short date time 2 pass
    'october 9', //Long date 3 fail
    'July 21, 2017 10:31 AM', // Long date time 1 pass
    'September 5, 1992 10:04 AM', // Long date time 2 pass
    'Octoer 9 10 a.m.', //Long date time 3 fail
    'Friday, July 21, 2017, 6:15 PM', // Extended date time 1 pass
    'Saturday, September 5, 1992, 10:04:01', // Extended date time 2 pass
    'Thursday, Ocboter 9, 1996 10 am' // extended date time 3 fail

];

var dateFormatterMethods = [
    'getShortTime',
    'getLongTime',
    'getShortDate',
    'getLongDate',
    'getShortDateTime',
    'getLongDateTime',
    'getExtendedDateTime'
];


//Create a function to compare the test date with predicted results using a method from dateFormatter. Return boolean and the inputs used.
function testDate(date, predicted, method) {
    var result = dateFormatter[method](date);
    if (result === predicted) {
        return 'Method: ' + method + ' | Expected result: ' + predicted + ' | Actual result: ' + result + ' | Matches: ' + true;
    } else {
        return 'Method: ' + method + ' | Expected result: ' + predicted + ' | Actual result: ' + result + ' | Matches: ' + false;
    };
};

//Loop through each dateFormatter method with three test dates. 
for (var i = 0, i2 = 0; i < dateFormatterMethods.length; i++, i2 += 3) {
    console.log(testDate(sampleDates[0], expectedResults[i2], dateFormatterMethods[i]));
    console.log(testDate(sampleDates[1], expectedResults[i2 + 1], dateFormatterMethods[i]));
    console.log(testDate(sampleDates[2], expectedResults[i2 + 2], dateFormatterMethods[i]));

};