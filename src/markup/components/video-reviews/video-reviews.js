if ( $(window).width() > 719 ) {
    var elem = document.querySelector('.grid');

    if (elem) {
        var msnry = new window.Masonry(elem, {
            itemSelector: '.grid-item'
        });
    }

}
