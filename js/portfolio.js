var portfolioItemsForHome = [
    {
        link: 'portfolio-dolche-vita.html',
        images: [],
        thumbnail: 'img/portfolio-home/1.jpg',
        title: "Dolche Vita Home",
        description: "The subject of the design is focus on the interior design of the proposed space and present Dolche Vita brand accessories. The morphology of this project is inspired by modular divisions."
    },
    {
        link: 'portfolio-salian-offices.html',
        thumbnail: 'img/portfolio-home/2.jpg',
        images: ['img/portfolio-home/3.jpg', 'img/portfolio-home/4.jpg', 'img/portfolio-home/5.jpg', 'img/portfolio-home/6.jpg', 'img/portfolio-home/7.jpg', 'img/portfolio-home/8.jpg', 'img/portfolio-home/9.jpg', 'img/portfolio-home/10.jpg'],
        title: 'Salian Office Building',
        description: 'Salian is an Iranian clothing brand. This design aims to transform the building from a private isolated mass into a multipurpose structure.'
    },
    {
        link: 'portfolio-majidieh-house.html',
        thumbnail: 'img/portfolio-home/11.jpg',
        images: ['img/portfolio-home/12.jpg', 'img/portfolio-home/13.jpg'],
        title: 'Majidieh House',
        description: 'Renovations for a one-floor modest villa in north of Tehran.'
    },
    {
        link: 'portfolio-eghbaliyeh-gardencity.html',
        thumbnail: 'img/portfolio-home/14.jpg',
        images: ['img/portfolio-home/15.jpg'],
        title: 'Eghbaliye Garden City',
        description: 'The main purpose of this project is to organize the city of Eghbaliye, to review the city’s livelihood, economic, social and demographic conditions.'
    },
    {
        link: 'portfolio-qaban-museum.html',
        thumbnail: 'img/portfolio-home/16.jpg',
        images: ['img/portfolio-home/17.jpg', 'img/portfolio-home/18.jpg'],
        title: 'Qaban Museum',
        description: 'The museum is inspired by the Qaban castle in Maku, in the West Azerbaijan Province, and is tasked to protect and preserve the remains of the castle relics.'
    },
    {
        link: 'portfolio-mediatheque.html',
        thumbnail: 'img/portfolio-home/19.jpg',
        images: [],
        title: 'Mediatheque',
        description: 'A Mediatheque complex, art gallery, cinema and museum, functioning as a media library, exhibition space and recreational area as proxies for social congregations.'
    },
    {
        link: 'img/portfolio-home/20.jpg',
        thumbnail: 'img/portfolio-home/20.jpg',
        images: [],
        title: 'Rolfbenz Cafe',
        description: 'A cafe designed for the Rolfbenz brand in Tehran. The main concept is to present large open spaces so the private/VIP locations of the bar would be separate from the public while allowing all spaces to have a view of the main void.'
    },
    {
        link: 'portfolio-chitgar-connection-bridge.html',
        thumbnail: 'img/portfolio-home/21.jpg',
        images: ['img/portfolio-home/22.jpg', 'img/portfolio-home/23.jpg'],
        title: 'Chitgar Connection Bridge',
        description: 'As the largest metropolitan area in Tehran, this project is about connecting the park and the lake in the Chitgar Recreational Zone.'
    },
    {
        link: 'img/portfolio-home/24.jpg',
        thumbnail: 'img/portfolio-home/24.jpg',
        images: ['img/portfolio-home/25.jpg', 'img/portfolio-home/35.jpg'],
        title: 'New Plasco',
        description: 'The Plasco building’s exterior design is inspired by a new concept as well as the tragic fire accident. We try to connect the pathways and use the ceiling of the 5-story building to house more people into the building and use the spaces as the museum to pay tribute to fire-fighters who died in the fire explosion.'
    },
    {
        link: 'portfolio-dezashib-offices.html',
        thumbnail: 'img/portfolio-home/26.jpg',
        images: ['img/portfolio-home/27.jpg'],
        title: 'Dezashib Offices',
        description: 'A renovation project where residential spaces are transformed into office buildings. The main design goal is to present a new concept to allow for introduction of green spaces while also exposing the corridors and staircases to the public view.'
    },
    {
        link: 'portfolio-mehrshahr-villa.html',
        thumbnail: 'img/portfolio-home/28.jpg',
        images: ['img/portfolio-home/29.jpg', 'img/portfolio-home/30.jpg', 'img/portfolio-home/31.jpg', 'img/portfolio-home/32.jpg', 'img/portfolio-home/33.jpg', 'img/portfolio-home/34.jpg'],
        title: 'Mehrshahr Villa',
        description: 'A family villa, from a collection of 4 villas where the main design idea is to introduce new open spaces for the family to include both private and public spaces, separately.'
    },
    {
        link: 'portfolio-residential-complex.html',
        thumbnail: 'img/portfolio-home/36.jpg',
        images: [],
        title: 'Residential Complex',
        description: 'Project spaces are designed according to the land topography. Apartment spaces were located at highest parts of the site with the best view and farthest distance from %20 slope of the land. Villa spaces could provide beautiful architectural appearance with better diffusion by benefiting from the topographical situation.'
    }
]

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}

function writePortfolioWorkItemsForHome() {
    var template =
        `<div class='work-item hover-trigger hover-scale wow zoomIn data-wow-duration="2s" data-wow-delay=".2s"'>
            <div class='work-item__container card'>
                <div class='work-item__img-holder'>
                <a href='$link'>
                    <img src='$image' title='pdescription' alt='pdescription' class='work-item__img'>
                </a>
                $images
                </div>
                <div class='card__body'>
                <div class='work-item__description'>
                    <h3 class='work-item__title'><a href=''>$title</a></h3>
                    <p class='work-item__text'>pdescription</p>
                </div>
                </div>
            </div>
        </div>`;

        var copiedItems = shuffle(portfolioItemsForHome.slice());
        copiedItems.forEach(element => {
            var images = "<a href='" + element.thumbnail + "' class='lightbox-img'></a>";
            var allThumbnails = [element.thumbnail];
            for (let idx = 0; idx < element.images.length; idx++) {
                images += "<a href='" + element.images[idx] + "' class='lightbox-img'></a>";
                allThumbnails.push(element.images[idx]);
            }
            var thumbnailIdx = Math.floor(Math.random() * allThumbnails.length);
            var selectedThumbnail = allThumbnails[thumbnailIdx];
            var html = template.replace("$link", element.link)
                .replace("$images", images)
                .replace("$image", selectedThumbnail)
                .replace("$title", element.title)
                .replace(/pdescription/g, element.description);
            document.write(html);
        });
}



/*********************************************************
Write out background images for the carousel on the home page
/**********************************************************/
function writeCarouselBackgroundImages() {
    var template =
    `<div class="carousel-item $active">
        <img class="d-block w-100 bg-img brightness-half" src="img/hanna/$image" 
            alt="Hannaneh Misaghi | Architecture, Graphics and Design Studio | Instagram" 
            title="Hannaneh Misaghi | Architecture, Graphics and Design Studio | Instagram">
    </div>`;
    const totalNumberOfImages = 11;
    var backgroundImages = [];
    for (let index = 1; index <= totalNumberOfImages; index++) {
        backgroundImages.push("bg" + index + ".jpg");
    }
    backgroundImages.sort(() => Math.random() - 0.5);
    for (let index = 0; index < backgroundImages.length; index++) {
        const element = backgroundImages[index];
        const active = index == 0;

        var html = template
            .replace("$active", (active ? "active" : ""))
            .replace("$image", element);
        document.write(html);
    }
}


function writPortfolioItemsForProject(path, count) {
    for (let index = 1; index <= count; index++) {
        var item = "<div class='owl-item'>";
        item += "<img src='" + path + "/" + index + ".jpg' alt='Hannaneh Misaghi | Architecture, Graphics and Design Studio'>";
        item += "</div>";
       
        $('#owl-work-single').append(item);
    }
}