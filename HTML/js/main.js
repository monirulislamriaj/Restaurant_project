(function($) {
    "use strict";
    // slider

    // sticky nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop()) {
            $('nav').addClass('black');
        } else {
            $('nav').removeClass('black');
        }
    })

    //niceSelect
    $('select').niceSelect();



})(jQuery);