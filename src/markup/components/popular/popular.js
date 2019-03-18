
$('.js-popular-filter').on('click', '.popular__item:not(.popular__item_active)', function () {
    $(this).addClass('popular__item_active').siblings().removeClass('popular__item_active');
});
