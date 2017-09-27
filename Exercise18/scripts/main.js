$(document).ready(function () {

    //List Titles
    var appendUrl = 'http://jsonplaceholder.typicode.com/posts?userId=1';
    $.get(appendUrl, function (result) {
        var appendElm = $("#append");
        var html = "";
        //Work forward through array, adding each result to html var
        for (var i = 0; i < result.length; i++) {
            var user = result[i];
            html += "<li> Index: " + [i] + " | Title: " + user.title;
        };
        //append resulting html to #append ul
        appendElm.append(html);

    });


    //
    var prependUrl = 'http://jsonplaceholder.typicode.com/photos?albumId=1';
    $.get(prependUrl, function (result) {
        var prependElm = $("#prepend");
        var html = "";
        //Work from the end of array backwards to 0 index and add to html var
        for (var i = result.length -1; i >= 0;  i--){
            var album = result[i];
            html += "<li> Index: " + [i] + " | Title: " + album.title;
        };
        //Prepend completed html var to #prepend ul
        prependElm.prepend(html);
    });

});