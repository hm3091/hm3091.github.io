/*********************************************************
Change the total number of images to load images
for the website background. Image are expected to be found
inside the img/hanna directory using the filename format bg-{number}.jpg
/**********************************************************/

var totalNumberOfImages = 10
var imageNumber=Math.floor(Math.random() * totalNumberOfImages) + 1;
$('#sectionBackgroundImage').css("background-image", "url(img/hanna/bg" + imageNumber + ".jpg)");
$('#sectionBackgroundImagePortfolio').css("background-image", "url(img/hanna/bg" + imageNumber + ".jpg)");
$('#sectionBackgroundImagePortfolioExploded').css("background-image", "url(img/diagrams/exploded/06.jpg)");
/*********************************************************
Change slogans by adding them below, separate them by a comma
/**********************************************************/

const slogans = [
    "Stylish Architectural Designs and Professional Graphics",
    "Professional Architectural Designs with Stylish Graphics"
];

var sloganNumber=Math.floor(Math.random() * slogans.length);
$('#sloganText').text(slogans[sloganNumber]);

/*********************************************************
The logic below is used to apply shade and filters animations
as the background picture loads. Do not modify!
/**********************************************************/

var changeBgFunc = setInterval(changeBackgroundFilter, 80);
function changeBackgroundFilter() {
    var filter = $('#sectionBackgroundImage').css("filter");
    var first = filter.indexOf('(');
    var second = filter.indexOf(')');
    var value = filter.substring(first + 1, second);
    value -= .1
    var newFilter = filter.substring(0, first + 1) + value + filter.substring(second);
    $('#sectionBackgroundImage').css("filter", newFilter);
    if (value <= 0.38) {
        clearInterval(changeBgFunc)
    }
}


// $('img').on('dragstart', function(event) { event.preventDefault(); });
// $("body").on("contextmenu", function(e) {
//   return false;
// });
