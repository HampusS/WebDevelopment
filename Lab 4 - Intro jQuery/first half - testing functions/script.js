// Event som körs när sidan laddats klart
/*$("#jokeButton").on("click", function(){
    // Sidan har laddat klart
    alert("Sidan har laddat klart!");
});*/

$(document).on("ready", onLoad);

var origSize = 0;
function onLoad(){
    $("body").css("background-color", "gray");
    $("section").css("background-color", "green");
    $("header").css("color", "blue");
    $("a").css("color", "yellow");
    $("a").css("text-decoration", "none");
}

$("p").on("click", function(){
    $(this).css("color", "gray");
});

$("h2").mouseover(function() {
    $(this).css("text-decoration", "underline");
    })
    .mouseout(function() {
    $(this).css("text-decoration", "none");
});

$("h1").dblclick(function() {
    var fontSize = $(this).css("font-size");
    var newSize = parseInt(fontSize.split("px")[0]) + 2;
    $(this).css("font-size", newSize);
});


