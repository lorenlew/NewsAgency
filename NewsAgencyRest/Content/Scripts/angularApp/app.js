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
                .state('state1', {
                    url: '/state1',
                    templateUrl: 'partials/state1.html'
                })
                .state('state2', {
                    url: '/state2',
                    templateUrl: 'partials/state2.html'
                });

        });
})();