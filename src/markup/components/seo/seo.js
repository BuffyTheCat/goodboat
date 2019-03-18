$('.js-show-text-footer').on('click', function () {
    let $this = $(this),
        text = $this.text();

    if (text === 'Развенуть полное описание') {
        $this.text('Свернуть полное описание');
    } else {
        $this.text('Развенуть полное описание');
    }
    $this.toggleClass('link_color_deep-sky-blue link_color_yellow');
    $this.parents('.seo').find('.seo__content').first().toggleClass('seo__content_height_small');
    $this.parents('.seo').find('.seo__content').first().children('.text').toggleClass('text_color_blue-rackley text_color_white');
});
