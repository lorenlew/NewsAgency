angular.module('app')
    .directive('customSubmit', function () {
        'use strict';

        return {
            restrict: 'A',
            link: function (scope, element, attributes) {

                if (typeof attributes.novalidate === 'undefined') {
                    attributes.$set('novalidate', 'novalidate');
                }

                element.on('submit', function (e) {
                    e.preventDefault();

                    var form = scope.$eval(attributes.name);
                    if (form.$valid) {
                        scope.$eval(attributes.customSubmit);
                        jQuery('#popUp').bPopup().close();
                        return;
                    }
                });
            }
        };
    })