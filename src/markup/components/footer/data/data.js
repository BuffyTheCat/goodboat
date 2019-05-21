var data = {
    footer: {
        main: {
            footerModifier: 'footer_main',
            request: function (fullData) {
                return fullData.request;
            }
        },
        videoReviews: {
            footerModifier: 'footer_with-wave'
        },
        aboutUs: {
            footerModifier: 'footer_with-wave'
        },
        contacts: {
            footerModifier: 'footer_with-wave'
        },
        fishing: {
            footerModifier: 'footer_with-wave',
            discount: function (fullData) {
                return fullData.discount;
            }
        },
        notFound: {
            footerModifier: 'footer_with-wave'
        },
        rules: {
            footerModifier: 'footer_with-wave'
        },
        serviceCatalog: {
            footerModifier: 'footer_with-wave'
        },
        serviceDetiled: {
            footerModifier: 'footer_with-wave',
            discount: function (fullData) {
                return fullData.discount;
            }
        },
        transportCatalog: {
            footerModifier: 'footer_with-wave'
        },
        yachtPage: {
            footerModifier: 'footer_with-wave'
        }
    }};
