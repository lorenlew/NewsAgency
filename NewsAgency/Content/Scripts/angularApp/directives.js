(function () {
    'use strict';

    angular.module('newsAgency.directives', []).
        directive('appVersion', [
            'version', function (version) {
                return function (scope, elm, attrs) {
                    elm.text(version);
                };
            }
        ]);
})();