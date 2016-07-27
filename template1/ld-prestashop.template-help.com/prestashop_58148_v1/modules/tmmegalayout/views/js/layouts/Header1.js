var toogleFlag = true;

function tabletResize(status) {
    if (status == 'enable') {
        $('#header-account-content, #header-login-content').removeClass('toogle_content').css('display', 'block');
        if (!$('.nav .search_box').length) {
            $(".search_box").prependTo('.nav > div');
        }
        if (!$('.nav .compare_wishlist').lenght) {
            $('.compare_wishlist').prependTo('.nav > div');
        }
        if (!$('.nav > .current').length) {
            $('.nav').prepend('<span class="current"></span>');
            $('.nav > div').addClass('toogle_content').css('display', 'none');
            if (toogleFlag == false) {
                dropDown('.nav > .current', '.nav > .toogle_content');
            }
        }
        toogleFlag = true;
    } else {
        if (!$('.menu_indent #header_logo').length) {
            $("#header_logo").clone().prependTo(".menu_indent");
        }
        if (('.isStuck').length > 0) {
            $(".search_box").insertAfter(".menu_indent > ul");
        }
        $('#header-account-content, #header-login-content').addClass('toogle_content').css('display', 'none');
        if ($('.cartBox').length > 0) {
            $('.compare_wishlist').insertAfter('.cartBox');
        } else {
            $('.compare_wishlist').insertAfter('#header_logo');
        }
        if ($('.nav > .current').length) {
            $('.nav > .current').remove();
            $('.nav > div').removeClass('toogle_content').css('display', 'block');
        }
        toogleFlag = false;
    }
}