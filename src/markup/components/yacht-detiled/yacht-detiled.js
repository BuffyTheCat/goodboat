$('.yacht-detiled__main-image').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '.yacht-detiled__slider',
    rows: 0,
    responsive: [
        {
            breakpoint: 719,
            settings: {
                dots: true
            }
        }
    ]
});
$('.yacht-detiled__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.yacht-detiled__main-image',
    dots: true,
    vertical: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    rows: 0,
    responsive: [
        {
            breakpoint: 1279,
            settings: {
                slidesToShow: 3,
                centerMode: true,
                centerPadding: '55px',
                vertical: false,
                swipe: true
            }
        }
    ]
});
var filtered = false;
$('.yacht-detiled__gallery-filtering').on('change', 'input[name=filter]', function functionName() {
    var filterClass = $(this).data('value');
    $('.yacht-detiled__main-image').slick('slickUnfilter');
    $('.yacht-detiled__main-image').slick('slickFilter', filterClass);
    $('.yacht-detiled__slider').slick('slickUnfilter');
    $('.yacht-detiled__slider').slick('slickFilter', filterClass);

});
