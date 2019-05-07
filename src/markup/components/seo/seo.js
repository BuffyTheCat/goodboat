$('.seo__arrow').on('click', function () {
    let $this = $(this);
    $this.parents('.seo').find('.seo__content').first().toggleClass('seo__content_height_small');
    $this.toggleClass('rotated');
});
