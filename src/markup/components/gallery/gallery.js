$('.my-flipster').flipster({
    style: 'carousel',
    loop: true,
    spacing: -0.3,
    touch: true,
    buttons: $(document).width() > 960,
    nav: $(document).width() < 960,
    scrollwheel: false
});
