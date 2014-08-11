(function () {
    'use strict';

    angular.module('newsAgency', [
            'ngRoute',
            'newsAgency.filters',
            'newsAgency.services',
            'newsAgency.directives',
            'newsAgency.controllers'
        ]).
        config([
            '$routeProvider', function ($routeProvider)
            {
                $routeProvider.when('/home', { templateUrl: 'partials/home.html', controller: 'MyCtrl1' });
                $routeProvider.when('/content1', { templateUrl: 'partials/content1.html', controller: '' });
                $routeProvider.when('/content2', { templateUrl: 'partials/content2.html', controller: '' });
                $routeProvider.otherwise({ redirectTo: '/home' });
            }
        ]);
})();