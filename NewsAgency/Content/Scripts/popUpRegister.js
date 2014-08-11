(function ($) {
    'use strict';

    $(function () {
        $('#addNews').on('click', function (e) {
            e.preventDefault();
            return popUp(e);
        });
    });
})(jQuery);