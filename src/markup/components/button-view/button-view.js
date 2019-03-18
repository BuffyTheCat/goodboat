
$('.button-view__row').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(this).closest('.service-catalog').find('.service-catalog__service').removeClass('service-catalog__service_tile');
    $(this).closest('.service-catalog').find('.service-catalog__services').removeClass('tile');
});

$('.button-view__column').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(this).closest('.service-catalog').find('.service-catalog__service').addClass('service-catalog__service_tile');
    $(this).closest('.service-catalog').find('.service-catalog__services').addClass('tile');
});
