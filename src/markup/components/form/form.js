$('.form').validate({
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
        }
    },
    submitHandler: function (form, event) {
        form = $(event.target);
        $.ajax({
            method: 'post',
            url: form.attr('action'),
            data: form.serialize(),
            success: function (response) {
                form.find('.form__input').removeClass('error').prop('disabled', true);
                form.find('.form__textarea').removeClass('error').prop('disabled', true);
                form.find('.form__item-button').hide();
                form.find('.form__status-send').show();
            }
        });
    }
});

$('.form__input-phone').mask('8(900) 000-0000');
