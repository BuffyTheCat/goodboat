$('.request__form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        tel: {
            required: true,
            minlength: 7,
            maxlength: 15
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

$('.request__tel').mask('8(900) 000-0000');
