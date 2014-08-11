(function () {
    'use strict';

    angular.module('newsAgency.filters', []).
        filter('interpolate', [
            'version', function (version) {
                return function (text) {
                    return String(text).replace(/\%VERSION\%/mg, version);
                };
            }
        ]);
})();