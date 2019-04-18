var imageNumber=Math.floor(Math.random() * 10) + 1;
$('#sectionBackgroundImage').css("background-image", "url(img/hanna/bg" + imageNumber + ".jpg)");

// fadeFunction = setTimeout(function()
// {
//     var brightness = $('#sectionBackgroundImage').css("filter");
//     console.log(brightness);

//     //$('#sectionBackgroundImage').css("filter", "brightness(45%)");
//     //clearInterval(fadeFunction);
// },
// 1000);


var changeBgFunc = setInterval(changeBackgroundFilter, 50);
function changeBackgroundFilter() {
    var filter = $('#sectionBackgroundImage').css("filter");
    var first = filter.indexOf('(');
    var second = filter.indexOf(')');
    var value = filter.substring(first + 1, second);
    value -= .1
    var newFilter = filter.substring(0, first + 1) + value + filter.substring(second);
    $('#sectionBackgroundImage').css("filter", newFilter);
    if (value <= 0.45) {
        clearInterval(changeBgFunc)
    }
}

