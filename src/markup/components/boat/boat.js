
$('.js-boat-gallery').brazzersCarousel();

$('.stars').rateYo({
    rating: $(this).attr('data-rateyo-rating'),
    starWidth: '16px',
    normalFill: '#DDDEDE',
    ratedFill: '#FFE000',
    fullStar: true,
    readOnly: true
});

$('.boat__thumbs-item').on('mouseover', function () {
    let thumb = $(this).parents('.boat__thumbs').find('.boat__image');
    if (!$(this).hasClass('thumbs__navs-item--active')) {
        thumb.parent().find('.boat__thumbs-item--active').removeClass('boat__thumbs-item--active');
        thumb.attr('src', $(this).data('image'));
        $(this).addClass('boat__thumbs-item--active');
    }
});

$('.boat__book').on('mouseover', function () {
    $(this).closest('.boat').css('box-shadow', '0 16px 16px rgba(255, 221, 0, 0.2), 0 0 8px rgba(255, 221, 0, 0.08)');
});
$('.boat__book').on('mouseleave', function () {
    $(this).closest('.boat').css('box-shadow', '');
});
