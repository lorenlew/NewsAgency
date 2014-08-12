function popUp(e) {
    'use strict';

    e.preventDefault();
    jQuery('#popUp').bPopup({
        easing: 'easeOutBack',
        speed: 800,
        transition: 'slideDown'
    });
}