$('.form__input_number').mask('8(900) 000-0000');
$('.popup__form-dir').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        text: {
            required: true,
            minlength: 7
        },
        city: {
            required: true,
            minlength: 3
        },
        mail: {
            required: true,
            minlength: 7
        },
        theme: {
            required: true,
            minlength: 3
        },
        textarea: {
            required: true,
            minlength: 10
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__director').hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-text').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
            }
        });
    }
});

$('.popup__content-request').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        textarea: {
            required: true,
            minlength: 10
        }
    },
    submitHandler: function (form, event) {
        console.log('eeee');
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-text').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
            }
        });
    }
});

$('.popup__fishing-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        textarea: {
            required: true,
            minlength: 10
        },
        durationRent: {
            required: true
        },
        numberOfPeople: {
            required: true
        },
        dateForRent: {
            required: true
        },
        timeForRent: {
            required: true
        },
        timeForRentBeginning: {
            required: true
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__tab-wrap').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
                form.parents('.popup').find('.popup__content_booking-title').hide();
            }
        });
    }
});

$('.popup__close').on('click', function () {
    $.fancybox.close();
});

$('.popup__tab').on('click', function () {
    $(this)
    .addClass('active').siblings().removeClass('active')
    .closest('.popup__body').find('.popup__content').removeClass('active')
    .eq($(this).index()).addClass('active');
});

$('.popup__button-next').on('click', function () {
    $('.popup__tab-booking-fishing').trigger( 'click' );
});

$('.popup__rent-individual-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        textarea: {
            required: true,
            minlength: 10
        },
        durationRent: {
            required: true
        },
        numberOfPeople: {
            required: true
        },
        dateForRent: {
            required: true
        },
        timeForRent: {
            required: true
        },
        timeForRentBeginning: {
            required: true
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__tab-wrap').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
                form.parents('.popup').find('.popup__content_booking-title').hide();
            }
        });
    }
});

$('.popup__rent-group-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        textarea: {
            required: true,
            minlength: 10
        },
        durationRent: {
            required: true
        },
        numberOfPeople: {
            required: true
        },
        dateForRent: {
            required: true
        },
        timeForRent: {
            required: true
        },
        timeForRentBeginning: {
            required: true
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__tab-wrap').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
                form.parents('.popup').find('.popup__content_booking-title').hide();
            }
        });
    }
});

$('.popup__rent-fishing-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        textarea: {
            required: true,
            minlength: 10
        },
        durationRent: {
            required: true
        },
        numberOfPeople: {
            required: true
        },
        dateForRent: {
            required: true
        },
        timeForRent: {
            required: true
        },
        timeForRentBeginning: {
            required: true
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__tab-wrap').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
                form.parents('.popup').find('.popup__content_booking-title').hide();
            }
        });
    }
});

$('.popup__service-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 7,
            maxlength: 15
        },
        textarea: {
            required: true,
            minlength: 10
        },
        durationRent: {
            required: true
        },
        numberOfPeople: {
            required: true
        },
        dateForRent: {
            required: true
        },
        timeForRent: {
            required: true
        },
        timeForRentBeginning: {
            required: true
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.siblings('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__tab-wrap').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
                form.parents('.popup').find('.popup__content_booking-title').hide();
            }
        });
    }
});

$('.js-person').focusin(function () {
    if ($(window).width() > 480) {
        $(this).closest('.popup__item').find('.js-hide').fadeOut('400');
        setTimeout(function () {
            $('.js-person').closest('.popup__person').addClass('focus');
            $('.js-person').closest('.popup__item').find('.popup__social-icon').addClass('popup__social-icon_fill_ash-grey');
        }, 400);
    } else {
        $('.js-person').closest('.popup__item').find('.popup__social-icon').addClass('popup__social-icon_fill_ash-grey');
        $('.js-person').closest('.popup__item').find('.popup__social-wrap').find('.popup__text').toggleClass('popup__text_ash-grey');
    }
});

$('.js-file-video').on('change', function () {
    $(this).closest('.popup__file-item').find('.popup__file-text').text('Видео-файл прикреплен');
});

$('.js-file-photo').on('change', function () {
    $(this).closest('.popup__file-item').find('.popup__file-text').text('Фото-файл прикреплен');
});

$('#userAvatar').on('change', function () {
    let input = this;

    if (input.files && input.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            $('#userImg').attr('src', e.target.result).addClass('uploaded');
        };

        reader.readAsDataURL(input.files[0]);
    }
});

$('#formReview').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        textarea: {
            required: true,
            minlength: 10
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.hide();
                form.next('.popup__content-hidden').show();
                form.parents('.popup').children('.popup__info').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-text').hide();
                form.parents('.popup').find('.popup__title').children('.popup__title-hidden').show();
            }
        });
    }
});

$('[data-fancybox]').fancybox({
    touch: false
});



$('.popup__input-wrap-request_number').children('.form__input').keydown( function () {
    if ($(this).val().length >= 2) {
        $(this).val($(this).val().substr(0, 1));
    }
});

$('.popup__input-wrap-request_date').children('.form__input').keydown( function () {
    if ($(this).val().length >= 10) {
        $(this).val($(this).val().substr(0, 9));
    }
});

$('.popup__input-wrap-request_time').children('.form__input').keydown( function () {
    if ($(this).val().length >= 5) {
        $(this).val($(this).val().substr(0, 4));
    }
});
