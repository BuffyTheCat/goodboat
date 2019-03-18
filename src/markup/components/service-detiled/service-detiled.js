$('.js-show-text').on('click', function () {
    let $this = $(this),
        text = $this.text();

    if (text === 'Читать полное описание') {
        $this.text('Свернуть полное описание');
    } else if (text === 'Свернуть полное описание') {
        $this.text('Читать полное описание');
    } else if ( text === 'Читать отзыв полностью') {
        $this.text('Свернуть текст отзыва');
    } else if ( text === 'Свернуть текст отзыва') {
        $this.text('Читать отзыв полностью');
    } else if ( text === 'Смотреть все параметры') {
        $this.text('Скрыть все параметры');
    } else if ( text === 'Скрыть все параметры') {
        $this.text('Смотреть все параметры');
    }
    $this.toggleClass('link_color_deep-sky-blue link_color_yale-blue');
    $this.parent('.wrap-button').prev('.text-hide').toggleClass('text-hide_full');
    $this.next('.mini-arrow').toggleClass('service-detiled__left-subtitle-button_active');
    $this.next('.mini-arrow').toggleClass('mini-arrow_yale-blue');
});

if ($(window).width() < 1280) {
    $('.service-detiled__yacht-tablet').slick({
        infinite: true,
        slidesToShow: 2,
        arrows: false,
        variableWidth: true,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px',
                }
            }
        ]
    });
}
