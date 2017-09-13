$(document).ready(function () {

    ///// Code goes here

    //Part 1
    $('#btnOne').on('click', function () {
        alert('This is an alert!');
    });

    //Part 2
    function part2update() {
        $('.update-html').html('<h3>Hello World</h3>');
    }

    $('#btnTwo').on('click', part2update);

    //Part 3
    function part3update() {
        $('#text-update').val('Hello World');
    };

    $('#btnThree').on('click', part3update);


    //Part 4
    function part4update() {
        var copiedHTML = $('.copy-html').html();
        $('.paste-html').html(copiedHTML);
    }

    $('#btnCopyHtml').on('click', part4update);

    //Part 5
    function part5update() {
        var copiedValue = $('#copy-text').val();
        $('#paste-text').val(copiedValue);
    }
    $('#btnCopyValues').on('click', part5update);

});