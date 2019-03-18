$('.discount').tooltipster({
    trigger: 'click',
    theme: ['tooltipster-noir', 'tooltipster-noir-customized'],
    functionInit: function (instance, helper) {
        var content = $(helper.origin).find('.discount__content').detach();
        instance.content(content);
    }
});
