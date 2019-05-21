let $phones = $('[type=tel]');
$phones.inputmask({
    mask: '+7 999 999-99-99',
    showMaskOnHover: false
});

$('.popup__close').on('click', function () {
    $.fancybox.close();
});

$('.popup__thankyou-close').on('click', function () {
    $.fancybox.close();
});

$('.popup__remarks-close').on('click', function () {
    $.fancybox.close();
});

$('.popup__content-request').validate({
    focusInvalid: false,
    name: {
        required: true
    },
    phone: {
        required: true
    },
    textarea: {
        required: true
    },
    messages: {
        name: 'Ваше имя*',
        phone: 'Ваш телефон*',
        textarea: 'Введите сообщение'
    },
    invalidHandler: function (form, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            $('.login__error').show();
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                $('#requestForm').find('.popup__body.active').removeClass('active').next('.popup__body').addClass('active');
            }
        });
    }
});

$('.popup__content-book').validate({
    focusInvalid: false,
    name: {
        required: true
    },
    phone: {
        required: true
    },
    textarea: {
        required: true
    },
    messages: {
        name: 'Ваше имя*',
        phone: 'Ваш телефон*',
        textarea: 'Введите сообщение'
    },
    invalidHandler: function (form, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            $('.login__error').show();
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                $('#bookForm').find('.popup__body.active').removeClass('active').next('.popup__body').addClass('active');
            }
        });
    }
});

$('.popup__content-questions').validate({
    focusInvalid: false,
    name: {
        required: true
    },
    phone: {
        required: true
    },
    textarea: {
        required: true
    },
    messages: {
        name: 'Ваше имя*',
        phone: 'Ваш телефон*',
        textarea: 'Введите сообщение'
    },
    invalidHandler: function (form, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            $('.login__error').show();
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                $('#questionsForm').find('.popup__body.active').removeClass('active').next('.popup__body').addClass('active');
            }
        });
    }
});

$('.popup__content-remarks').validate({
    focusInvalid: false,
    textarea: {
        required: true
    },
    messages: {
        textarea: 'Введите сообщение'
    },
    invalidHandler: function (form, validator) {
        var errors = validator.numberOfInvalids();
        if (errors) {
            $('.login__error').show();
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                $('.popup__textarea').prop( 'disabled', true );
                $('.popup__remarks').find('.popup__title').html('Спасибо! <br/> Отзыв отправлен');
                $('.popup__remarks').find('.popup__placeholder').hide();
                $('.popup__remarks').find('.popup__submit').hide();
                $('.popup__remarks').find('.popup__remarks-close').show();
            }
        });
    }
});


$('.survey__yes').on('click', function () {
    $.fancybox.close();
});

$('.survey__no').on('click', function () {
    $(this).closest('.popup__thankyou.active').removeClass('active').next('.popup__body').addClass('active');
});

$('.popup__input').on('change', function () {
    if ($(this).val()) {
        $(this).closest('.popup__input-wrap').find('.popup__placeholder').addClass('active');
    } else {
        $(this).closest('.popup__input-wrap').find('.popup__placeholder').removeClass('active');
    }
});

$('.popup__textarea').on('change', function () {
    if ($(this).val()) {
        $(this).closest('.popup__input-wrap_textarea').find('.popup__placeholder').addClass('active');
    } else {
        $(this).closest('.popup__input-wrap_textarea').find('.popup__placeholder').removeClass('active');
    }
});

$('.tooltip').tooltipster({
    animation: 'fade',
    delay: 200,
    theme: ['ts-tooltip_mini'],
    distance: 16
});
