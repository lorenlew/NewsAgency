(function ($) {
    'use strict';

    $(".addNews").each(function () {
        $(this).on("click", function (e) {
            e.preventDefault();
            return popUp(e);
        });
    });
})(jQuery);