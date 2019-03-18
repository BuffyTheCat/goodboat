
var myMap,
    myPlacemarkOffice,
    myPlacemarkSochi,
    myPlacemarkAdler,
    myPlacemarkLoo;

function init() {
    if ( $(window).width() > 768 ) {
        myMap = new window.ymaps.Map('map', {
            center: [43.564220, 39.657404],
            zoom: 11,
            controls: ['zoomControl']
        });
    } else if ( $(window).width() < 720 ) {
        myMap = new window.ymaps.Map('map', {
            center: [43.564220, 39.657404],
            zoom: 9,
            controls: ['zoomControl']
        });
    } else {
        myMap = new window.ymaps.Map('map', {
            center: [43.564220, 39.657404],
            zoom: 10,
            controls: ['zoomControl']
        });
    }

    myPlacemarkOffice = new window.ymaps.Placemark([43.573881, 39.738872], {}, {
        iconLayout: 'default#image',
        iconImageHref: $('#map').data('placemark'),
        iconImageSize: [71, 74],
        iconImageOffset: [-35, -74]
    });

    myPlacemarkSochi = new window.ymaps.Placemark([43.581123, 39.718347], {}, {
        iconLayout: 'default#image',
        iconImageHref: $('#map').data('placemark'),
        iconImageSize: [71, 74],
        iconImageOffset: [-35, -74]
    });

    myPlacemarkAdler = new window.ymaps.Placemark([43.414464, 39.926283], {}, {
        iconLayout: 'default#image',
        iconImageHref: $('#map').data('placemark'),
        iconImageSize: [71, 74],
        iconImageOffset: [-35, -74]
    });

    myPlacemarkLoo = new window.ymaps.Placemark([43.697993, 39.586643], {}, {
        iconLayout: 'default#image',
        iconImageHref: $('#map').data('placemark'),
        iconImageSize: [71, 74],
        iconImageOffset: [-35, -74]
    });

    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects.add(myPlacemarkOffice).add(myPlacemarkSochi).add(myPlacemarkAdler).add(myPlacemarkLoo);

    if ( $(window).width() < 1025 ) {
        myMap.behaviors.disable('drag');
    }
}

if ($('#map').length > 0) {
    window.ymaps.ready(init);
}
