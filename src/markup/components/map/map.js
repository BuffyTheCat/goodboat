
var myMap,
    myPlacemarkOffice,
    myPlacemarkSochi,
    myPlacemarkAdler,
    myPlacemarkLoo;

function init() {
    if ( $(window).width() > 960 ) {
        myMap = new window.ymaps.Map('map', {
            center: [43.564220, 39.657404],
            zoom: 13,
            controls: ['zoomControl']
        });
    } else if ( $(window).width() < 960 ) {
        myMap = new window.ymaps.Map('map', {
            center: [43.564220, 39.657404],
            zoom: 9,
            controls: []
        });
        var pixelCenter = myMap.getGlobalPixelCenter(43.564220, 39.657404);
        pixelCenter = [
            pixelCenter[0],
            pixelCenter[1] - 150
        ];
        var geoCenter = myMap.options.get('projection').fromGlobalPixels(pixelCenter, myMap.getZoom());
        myMap.setCenter(geoCenter);
    } else {
        myMap = new window.ymaps.Map('map', {
            center: [43.564220, 39.657404],
            zoom: 10,
            controls: ['zoomControl']
        });
    }

    myPlacemarkOffice = new window.ymaps.Placemark([43.612200, 39.728919], {}, {
        iconLayout: 'default#image',
        iconImageHref: $('#map').data('placemark'),
        iconImageSize: [71, 74],
        iconImageOffset: [-35, -74]
    });

    myPlacemarkSochi = new window.ymaps.Placemark([43.580836, 39.718606], {}, {
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
