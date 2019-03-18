$('.js-show-text').on('click', function () {
    $(this).parents('.about-us__button').prev('.about-us__text-hidden').toggleClass('text-hide_full');
});

$(document).ready(function () {
    if ($(window).width() <= 480) {
        $('.about-us__preview-wrapper').slick({
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true
        });
    }
}
);
$(document).ready(function () {
    if ($(window).width() <= 480) {
        $('.about-us__staff').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 4,
            centerMode: true,
            arrows: false,
            centerPadding: '30px',
            adaptiveHeight: true
        });
    }
}
);
