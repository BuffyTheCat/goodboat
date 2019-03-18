
$('.carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                centerMode: false
            }
        }
    ]
});

$(document).ready(function () {
    $('.carousel__link[data-fancybox]').fancybox({
        baseClass: 'custom-gallery',
        thumbs: {
            autoStart: true,
            hideOnClose: true
        },
        baseTpl:
        '<div class="fancybox-container" role="dialog" tabindex="-1">' +
            '<div class="fancybox-bg"></div>' +
                '<div class="fancybox-inner">' +
                    '<div class="fancybox-infobar">' +
                        '<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
                        '<div class="fancybox-infobar__body">' +
                            '<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
                        '</div>' +
                        '<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
                    '</div>' +
                    '<div class="fancybox-toolbar">' +
                        '{{BUTTONS}}' +
                    '</div>' +
                    '<div class="fancybox-navigation">' +
                        '<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
                        '<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
                    '</div>' +
                    '<h2 class="fancybox-title"></h2>' +
                    '<div class="fancybox-stage"></div>' +
                    '<div class="fancybox-caption-wrap">' +
                        '<div class="fancybox-caption"></div>' +
                    '</div>' +
                '</div>' +
            '</div>',
        afterLoad: function (instance, current) {
            $('.fancybox-thumbs').mCustomScrollbar('destroy');
            $('.fancybox-thumbs').mCustomScrollbar('update');

            setTimeout(function () {
                $('.fancybox-thumbs').mCustomScrollbar({
                    axis: 'y',
                    scrollbarPosition: 'inside',
                    advanced: {
                        updateOnContentResize: true
                    },
                    live: true
                });
            });
        }
    });

    $('.carousel__link').on('click', function () {
        let nameService = $(this).children('.carousel__image').attr('alt');
        $('.custom-gallery').find('.fancybox-title').html(nameService);
    });

    $.fancybox.defaults.animationEffect = 'fade';
});
