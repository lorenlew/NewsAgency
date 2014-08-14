(function () {
    'use strict';

    angular.module('app', [
            'news',
            'ui.router',
            'ngAnimate',
            'pageControls'
        ])
        .config(function ($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/home');
            $stateProvider
                .state('home', {
                    url: '/home',
                    templateUrl: 'partials/home.html'
                })
                .state('weather', {
                    url: '/weather',
                    templateUrl: 'partials/weather.html'
                })
                .state('currencies', {
                    url: '/currencies',
                    templateUrl: 'partials/currencies.html'
                });

        });
})();