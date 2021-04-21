$(function() {

    'use strict';

    // dynamic portfolio items
    const portfolioItems = [
        {
            imageUrl: "images/portfolio-items/breakaway-entertainment-website.jpg",
            title: "Breakaway Entertainment Website",
            tag: "entertainment"
        },
        {
            imageUrl: "images/portfolio-items/delia-contracting-logo.jpg",
            title: "Delia Contracting",
            tag: "business"
        },
        {
            imageUrl: "images/portfolio-items/fwt-insurance-services-website.jpg",
            title: "FWT Insurance Services",
            tag: "business"
        },
        {
            imageUrl: "images/portfolio-items/her-fit-logo-transweb.jpg",
            title: "Her Fit Logo",
            tag: "fitness"
        },
        {
            imageUrl: "images/portfolio-items/olf-logo-2020.jpg",
            title: "OLF Fit Logo",
            tag: "fitness"
        },
        {
            imageUrl: "images/portfolio-items/rja-international-website.jpg",
            title: "RJA International Logo",
            tag: "fitness"
        },
        {
            imageUrl: "images/portfolio-items/yankenfera-cleaners-website.jpg",
            title: "Yankenfera Cleaners",
            tag: ["business"]
        }
    ];
    
    const createHtmlForPortfolioItem = ({ imageUrl, title, tag }) => {
        return `
            <div class="col-md-4 col-sm-12 col-xs-12 filtr-item" data-category="${tag}">
                <div class="content-image">
                    <a href="${imageUrl}" class="portfolio-popup">
                        <img src="${imageUrl}" alt="">
                        <div class="image-overlay"></div>
                        <div class="portfolio-caption">
                            <div class="title">
                                <h4>${title}</h4>
                            </div>
                            <div class="subtitle">
                                <span>Graphic Design</span>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    };

    const htmlForPortfolioItems = portfolioItems.map(item => createHtmlForPortfolioItem(item));
    htmlForPortfolioItems.map(item => document.getElementById("portfolio-items").innerHTML += item);

    // dynamic portfolio tags
    const createHtmlForTagItem = (name) => {
        return `
            <li data-filter="${name}">
                <span>${name}</span>
            </li>
        `;
    };
    const onlyUnique = (value, index, self) => {
        return self.indexOf(value) === index;
    };
    const uniqueTags = portfolioItems.map(item => item.tag).flat().filter(onlyUnique);
    const htmlForTags = uniqueTags.map(tag => createHtmlForTagItem(tag));
    htmlForTags.map(item => document.getElementById("tags-list").innerHTML += item);

    $('.fakeLoader').fakeLoader({

        timeToHide: 1200, //Time in milliseconds for fakeLoader disappear

        zIndex: "999",//Default zIndex

        spinner: "spinner3",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'

        bgColor: "#212121" //Hex, RGB or RGBA colors

    });
       
    // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });

    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // carousel resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    // collapse show on resume
    $('.collapse-show').collapse();

    // porfolio filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr({
            layout: 'sameWidth',
        });
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var vScroll = $(this).scrollTop();

        if( vScroll > 100) {
            $(".navbar").addClass("fix");
        }
        else {
            $(".navbar").removeClass("fix");
        }

    });
});