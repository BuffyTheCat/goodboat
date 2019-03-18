
$('.js-go-back').on('click', function () {
    $(this).closest('.navigation-mobile__submenu').fadeOut('slow');
    $(this).closest('.navigation-mobile__item').find('.navigation-mobile__submenu').addClass('animation-to-right');
    $(this).closest('.navigation-mobile__item').find('.navigation-mobile__submenu').removeClass('animation-to-left');
});

$('.navigation-mobile__link_sub').on('click', function () {
    $(this).closest('.navigation-mobile__item').find('.navigation-mobile__submenu').fadeIn('fast');
    $(this).closest('.navigation-mobile__item').find('.navigation-mobile__submenu').addClass('animation-to-left');
    $(this).closest('.navigation-mobile__item').find('.navigation-mobile__submenu').removeClass('animation-to-right');
});
