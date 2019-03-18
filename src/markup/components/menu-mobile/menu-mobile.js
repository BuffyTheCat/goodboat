
$('.js-close-menu').on('click', function () {
    $(this).closest('.menu-mobile').hide();
    $('.menu-mobile').removeClass('animation-to-left').addClass('animation-to-right');
    $('html, body').removeClass('js-no-scroll');
    $('.navigation-mobile__submenu').removeClass('animation-to-left').hide();
});

$('.navigation-mobile__link').on('click', function () {
    if ( !$(this).hasClass('navigation-mobile__link_sub')) {
        $(this).closest('.menu-mobile').hide();
        $('.menu-mobile').removeClass('animation-to-left').addClass('animation-to-right');
        $('.navigation-mobile__submenu').removeClass('animation-to-left').hide();
        $('html, body').removeClass('js-no-scroll');
    }
});
