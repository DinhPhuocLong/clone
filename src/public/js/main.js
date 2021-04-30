$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    navText: [
        '<div class="absolute -left-2 top-2/4 transform -translate-x-full"><i class="fas fa-chevron-circle-left text-3xl text-gray-500 hover:text-black" aria-hidden="true"></i></div>',
        '<div class="absolute -right-2 top-2/4 transform translate-x-full"><i class="fas fa-chevron-circle-right text-3xl text-gray-500 hover:text-black" aria-hidden="true"></i></div>',
    ],
    navContainer: '.owl-carousel',
    dots: false,
    responsive: {
        0: {
            items: 2,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 5,
            nav: true,
            loop: false
        }
    }
})

