angular.module('news')
    .controller('NewsController', [
        '$http', function ($http) {
            'use strict';

            var self = this;
            self.isFilterVisible = false;
            self.news = [];
            $http.get('/Content/TestData/testDataNews.json').success(function (data) {
                self.news = data;
            });
            this.toogleFilterVisibility = function()
            {
                if (self.isFilterVisible === true) {
                    self.isFilterVisible = false;
                } else {
                    self.isFilterVisible = true;
                }
            
        };
        }
    ])