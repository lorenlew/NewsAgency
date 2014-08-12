angular.module('news')
    .controller('NewsController', [
        '$http', function ($http) {
            'use strict';

            var self = this;
            self.isFilterVisible = false;
            self.news = [];
            $http.get('http://localhost:51045/api/news')
                .success(function (data) {
                    self.news = angular.fromJson(data.Data);
                })
                .error(function (data) {
                    self.news = data;
                });
            this.toogleFilterVisibility = function () {
                if (self.isFilterVisible === true) {
                    self.isFilterVisible = false;
                } else {
                    self.isFilterVisible = true;
                }

            };
        }
    ])