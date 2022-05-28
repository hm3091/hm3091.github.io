/*********************************************************
Change the total number of images to load images
for the website background. Image are expected to be found
inside the img/hanna directory using the filename format bg-{number}.jpg
/**********************************************************/

var totalNumberOfImages = 7;
function getBackgroundImageNumber() {
    return Math.floor(Math.random() * totalNumberOfImages) + 1;
}
function changeBackgroundImage() {
    $('#sectionBackgroundImage').css("background-image", "url(img/hanna/bg" + getBackgroundImageNumber() + ".jpg)").fadeIn();
}
changeBackgroundImage();

/*********************************************************
Change slogans by adding them below, separate them by a comma
/**********************************************************/

const slogans = [
    "Architectural Designs and Professional Graphics",
    "Professional Architectural Designs and Graphics"
];

var sloganNumber=Math.floor(Math.random() * slogans.length);
$('#sloganText').text(slogans[sloganNumber]);

/*********************************************************
The logic below is used to apply shade and filters animations
as the background picture loads. Do not modify!
/**********************************************************/
var changeBgFunc = setInterval(changeBackgroundFilter, 100);
function changeBackgroundFilter() {
    var filter = $('#sectionBackgroundImage').css("filter");
    if (filter == undefined) {
        clearInterval(changeBgFunc);
        return;
    }
    var first = filter.indexOf('(');
    var second = filter.indexOf(')');
    var value = filter.substring(first + 1, second);
    value -= .1
    var newFilter = filter.substring(0, first + 1) + value + filter.substring(second);
    $('#sectionBackgroundImage').css("filter", newFilter);
    if (value <= 0.58) {
        clearInterval(changeBgFunc)
    }
}


/*************************Disable Right Click *****************/
// $('img').on('dragstart', function(event) { event.preventDefault(); });
if (!window.location.href.startsWith("file:")) {
    $("body").on("contextmenu", function(e) {
    return false;
    });
}