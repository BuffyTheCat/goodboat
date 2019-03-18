$(window).on('load', function () {
    if ($(window).width() <= 1024) {
        $('.page__footer').children('.footer').addClass('footer_with-wave');
    }
});
