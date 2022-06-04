var portfolioItemsForHome = [
    {
        link: 'portfolio-dolche-vita.html',
        images: [],
        thumbnail: 'img/architecture-competitions/dolche-vita-home/4.jpg',
        title: "Dolche Vita Home",
        description: "The subject of the design is focus on the interior design of the proposed space and present Dolche Vita brand accessories. The morphology of this project is inspired by modular divisions."
    },
    {
        link: 'portfolio-alps-wellness-retreat.html',
        images: [],
        thumbnail: 'img/architecture-competitions/alps-wellness-retreat/14.jpg',
        title: "Alps Wellness Retreat",
        description: "The vision of this project is to identify issues and elements in the built and natural environment that may be applied to making a positive impact for veterans suffering from PTSD by designing a wellness and retreat center."
    },
    {
        link: 'portfolio-al-daem-education-center.html',
        images: [],
        thumbnail: 'img/architecture-design/personal-projects/al-daem-education-center/9.jpg',
        title: "Al Daem Education Center",
        description: "The project's main goal is to create an educational place for women in one of the local mid-level areas of Dubai, UAE. This research project aims to design a space to enable women to access education and training opportunities in Dubai."
    },
    {
        link: 'portfolio-eghbaliyeh-gardencity.html',
        thumbnail: 'img/architecture-design/personal-projects/eghbaliyeh-garden-city/9.jpg',
        images: [],
        title: 'Eghbaliye Garden City',
        description: "The main purpose of this project is to organize the city of Eghbaliye, to review the city's livelihood, economic, social and demographic conditions."
    },
    {
        link: 'portfolio-qaban-museum.html',
        thumbnail: 'img/architecture-design/personal-projects/qaban-museum/18.jpg',
        images: [],
        title: 'Qaban Museum',
        description: 'The museum is inspired by the Qaban castle in Maku, in the West Azerbaijan Province, and is tasked to protect and preserve the remains of the castle relics.'
    },
    {
        link: 'portfolio-mediatheque.html',
        thumbnail: 'img/architecture-design/personal-projects/mediatheque/13.jpg',
        images: [],
        title: 'Mediatheque',
        description: 'A Mediatheque complex, art gallery, cinema and museum, functioning as a media library, exhibition space and recreational area as proxies for social congregations.'
    },
    {
        link: 'portfolio-tagh-behesht.html',
        thumbnail: 'img/architecture-competitions/tagh-behesht/1.jpg',
        images: [],
        title: 'Tagh Behesht',
        description: "Tagh Behesht is located in Mash-had, Iran. The project's site has great potential to become an urban hub, given its proximity to one of Mash-had's largest public parks which encourages and invites visitors of all ages."
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
                    <img class='portfolio-image-thumb' src='$image' title='pdescription' alt='pdescription' class='work-item__img'>
                </a>
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
           
            var allThumbnails = [element.thumbnail];
            for (let idx = 0; idx < element.images.length; idx++) {
                allThumbnails.push(element.images[idx]);
            }
            var thumbnailIdx = Math.floor(Math.random() * allThumbnails.length);
            var selectedThumbnail = allThumbnails[thumbnailIdx];
            var html = template.replace("$link", element.link)
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
            alt="Hannaneh Misaghi | Architecture and Design Studio Studio | Instagram" 
            title="Hannaneh Misaghi | Architecture and Design Studio Studio | Instagram">
    </div>`;
    const totalNumberOfImages = 7;
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
        item += "<img class='portfolio-image portfolio-image-thumb' src='" + path + "/" + index + ".jpg' alt='Hannaneh Misaghi | Architecture and Design Studio Studio'>";
        item += "</div>";
       
        $('#owl-work-single').append(item);
    }
}