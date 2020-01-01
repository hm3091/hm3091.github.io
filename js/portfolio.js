var portfolioItemsForHome = [
    {
        link: 'img/portfolio-home/1.jpg',
        images: [],
        thumbnail: 'img/portfolio-home/1.jpg',
        title: 'Chitgar Connection Bridge',
        description: 'As the largest metropolitan area in Tehran, this project is about connecting the park and the lake in the Chitgar Recreational Zone.'
    },
    {
        link: 'img/portfolio-home/4.jpg',
        thumbnail: 'img/portfolio-home/4.jpg',
        images: ['img/portfolio-home/2.jpg', 'img/portfolio-home/3.jpg'],
        title: 'Salian Office Building',
        description: 'Salian is an Iranian clothing brand. This design aims to transform the building from a private isolated mass into a multipurpose structure.'
    },
    {
        link: 'img/portfolio-home/5.jpg',
        thumbnail: 'img/portfolio-home/5.jpg',
        images: ['img/portfolio-home/6.jpg', 'img/portfolio-home/7.jpg'],
        title: 'Majidieh House',
        description: 'Renovations for a one-floor modest villa in north of Tehran.'
    },
    {
        link: 'img/portfolio-home/8.jpg',
        thumbnail: 'img/portfolio-home/8.jpg',
        images: ['img/portfolio-home/9.jpg'],
        title: 'Eghbaliye Garden City',
        description: 'The main purpose of this project is to organize the city of Eghbaliye, to review the city’s livelihood, economic, social and demographic conditions.'
    },
    {
        link: 'img/portfolio-home/10.jpg',
        thumbnail: 'img/portfolio-home/10.jpg',
        images: [],
        title: 'Mediatheque',
        description: 'A Mediatheque complex, art gallery, cinema and museum, functioning as a media library, exhibition space and recreational area as proxies for social congregations.'
    },
    {
        link: 'img/portfolio-home/11.jpg',
        thumbnail: 'img/portfolio-home/11.jpg',
        images: ['img/portfolio-home/12.jpg', 'img/portfolio-home/13.jpg'],
        title: 'Qaban Museum',
        description: 'The museum is inspired by the Qaban castle in Maku, in the West Azerbaijan Province, and is tasked to protect and preserve the remains of the castle relics.'
    }
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function writePortfolioWorkItemsForHome() {
    var template =
        `<div class='work-item hover-trigger hover-scale'>
            <div class='work-item__container card'>
                <div class='work-item__img-holder'>
                <a href='$link' class='lightbox-img'>
                    <img src='$image' title='pdescription' alt='pdescription' class='work-item__img'>
                </a>
                $images
                </div>
                <div class='card__body'>
                <div class='work-item__description'>
                    <h3 class='work-item__title'><a href=''>$title</a></h3>
                    <p class='work-item__text'>pdescription</p>
                    <!-- <a href='portfolio-single.html' class='link-more'>View Project<i class='ui-arrow-right'></i></a> -->
                </div>
                </div>
            </div>
        </div>`;

        var copiedItems = shuffle(portfolioItemsForHome.slice());
        copiedItems.forEach(element => {
            var images = ""
            for (let idx = 0; idx < element.images.length; idx++) {
                images += "<a href='" + element.images[idx] + "' class='lightbox-img'></a>";
            }
            var html = template.replace("$link", element.link)
                .replace("$images", images)
                .replace("$image", element.thumbnail)
                .replace("$title", element.title)
                .replace(/pdescription/g, element.description);
            document.write(html);
        });
}