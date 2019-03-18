
$(window).on('load', function () {
    $('.js-horizontal-slider').mCustomScrollbar({
        axis: 'x',
        scrollbarPosition: 'inside',
        advanced: {
            updateOnContentResize: true
        },
        live: true,
        mouseWheel: false
    });
});
