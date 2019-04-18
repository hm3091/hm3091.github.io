var imageNumber=Math.floor(Math.random() * 10) + 1;
$('#sectionBackgroundImage').css("background-image", "url(img/hanna/bg" + imageNumber + ".jpg)");

var changeBgFunc = setInterval(changeBackgroundFilter, 80);
function changeBackgroundFilter() {
    var filter = $('#sectionBackgroundImage').css("filter");
    var first = filter.indexOf('(');
    var second = filter.indexOf(')');
    var value = filter.substring(first + 1, second);
    value -= .1
    var newFilter = filter.substring(0, first + 1) + value + filter.substring(second);
    $('#sectionBackgroundImage').css("filter", newFilter);
    if (value <= 0.40) {
        clearInterval(changeBgFunc)
    }
}
