$(window).on('load', function () {
    if ($(window).width() < 768) {
        $('.similar-offers__content').slick({
            slidesToShow: 1,
            centerMode: true,
            arrows: false,
            infinite: true,
            centerPadding: '40px',
        });
    }
});
