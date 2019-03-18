if ($(window).width() < 1280) {
    $('.gallery-with-slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        variableWidth: false,
        adaptiveHeight: true
    });
}

if ($('.gallery-with-slider__slider').length > 0 && $(window).width() < 1280) {
    $('.gallery-with-slider__slider').mCustomScrollbar('destroy');
}

$('.gallery-with-slider__slider-item').on('click', function (e) {
    var link = $(this).children().attr('src');
    $('.gallery-with-slider__preview-image').attr('src', link);
});
