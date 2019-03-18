
$('.pagination-filters__item').on('click', function () {
    $(this).addClass('js-active');
    $(this).siblings().removeClass('js-active');
});
