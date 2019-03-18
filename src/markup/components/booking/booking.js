
$.fn.datepicker.language['my-leng'] = {
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dateFormat: 'dd MM yyyy',
    firstDay: 1
};

$('.booking__input_number').on('click', function () {
    $(this).closest('.booking__item_date').removeClass('js-placeholder');
});

$('.booking__input_number').mask('8(900) 000-0000');

$('.js-input-date').datepicker({
    language: 'my-leng',
    position: 'bottom right',
    autoClose: true,
    showOtherMonths: false,
    minDate: new Date(),
    navTitles: {
        days: 'MM <i>yyyy</i>'
    }
});

$('.booking__form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
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
                form.siblings('.booking__title').hide();
                form.siblings('.name_after_send').show();
                form.hide();
                form.siblings('.booking__form_after_send').show();
            }
        });
    }
});

jQuery.extend(jQuery.validator.messages, {
    required: 'Обязательно для заполнения',
    number: 'Пожалуйста, введите цифры',
    equalTo: 'Пароли не совпадают',
    maxlength: jQuery.validator.format('Введите максимум {0} символов'),
    minlength: jQuery.validator.format('Введите от {0} символов'),
    max: jQuery.validator.format('Введите до {0} символов')
});
