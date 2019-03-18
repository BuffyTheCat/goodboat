
$('.reviews-other__button_arrow').on('click', function () {
    let getOffsetHeader = $('#header').offset().top;

    $('html, body').animate({
        scrollTop: getOffsetHeader
    }, 600);
});
