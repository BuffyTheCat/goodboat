$('.review__media-photo-link').fancybox({
    baseClass: 'custom-gallery',
    thumbs: {
        autoStart: true,
        hideOnClose: true
    },
    afterLoad: function (instance, current) {
        $('.fancybox-thumbs').mCustomScrollbar();
    }
});
let VK = window.VK;
let FB = window.FB;
$('.popup__vk-link').on('click', function () {
    function vkInit() {
        return new Promise((resolve, reject) => {
            VK.init({
                apiId: 6195445
            });
            VK.Auth.login(data => {
                if (data.session) {
                    resolve(data);
                } else {
                    reject(data);
                }
            });
        });
    }
    let vkData = vkInit().then( () => {
        return new Promise((resolve, reject) => {
            VK.api('users.get', {
                v: 5.68,
                fields: 'id, first_name, last_name, photo_50'
            }, data => resolve(data.response));
        });
    }).then((data) => {
        let user = data[0];
        localStorage.userDataVk = JSON.stringify(user);
        let userNameProp = user.first_name + ' ' + user.last_name;
        let userPhoto = user.photo_50;
        let userId = user.id;
        $('#userNameReview').val(userNameProp);
        $('#userNameReview').attr('disabled', 'disabled');
        $('#userAvatar').attr('disabled', 'disabled');
        $('#userImgReview').attr('src', userPhoto);
        $('.popup__person').addClass('focus');
        $('.popup__item').children('.popup__text').hide();
        $('.popup__social-wrap').hide();
        $('.popup__person').children('input[name="fio"]').val(userNameProp);
        $('.popup__person').children('input[name="vk_id"]').val(userId);
        $('.popup__person').children('input[name="avatar"]').val(userPhoto);
        $('.popup__person').children('input[name="user_href"]').val('vk.com/id' + userId);
    });
});


$('.popup__fb-link').on('click', function () {
    function fbInit() {
        return new Promise((resolve, reject) => {
            FB.login(data => {
                if (data.authResponse) {
                    resolve(data);
                } else {
                    reject(data);
                }
            });
        });
    }
    let fbData = fbInit().then( () => {
        return new Promise((resolve, reject) => {
            FB.api('/me', {
                fields: 'id, first_name, last_name, picture'
            }, data => resolve(data));
        });
    }).then((data) => {
        console.log(data);
    });
});
