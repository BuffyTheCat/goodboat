
$('.js-open-text').on('click', function () {
    $(this).closest('.review-all').find('.review-all__text').toggleClass('js-open');
    $(this).toggleClass('js-active');

    if ( $(this).text() === 'Читать отзыв полностью' ) {
        $(this).text('Свернуть текст отзыва');
    } else {
        $(this).text('Читать отзыв полностью');
    }
});
