
$('.js-scroll-to').on('click', function () {
    let getHeaderOffset = $('#header').offset().top;

    $('html, body').animate({
        scrollTop: getHeaderOffset
    }, 600);
});
