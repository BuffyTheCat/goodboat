
$('.js-open-menu').on('click', function () {
    $(this).closest('header').find('.menu-mobile').fadeIn('fast');
    $('.menu-mobile').addClass('animation-to-left');
    $('.menu-mobile').removeClass('animation-to-right');
    $('html, body').addClass('js-no-scroll');
});
