(function () {
    'use strict';

    angular.module('newsAgency.controllers', [])
        .controller('MyCtrl1', [
            '$scope', function ($scope) {

            }
        ])
        .controller('MyCtrl2', [
            '$scope', function ($scope) {

            }
        ])
        .controller('StoreController', [
            '$http', function ($http) {
                var self = this;
                self.news = [];
                $http.get('/Content/TestData/testDataNews.json').success(function (data) {
                    self.news = data;
                });
            }
        ])
        .controller('ArticleController', function () {
                var self = this;
                self.article = {};
                self.tagsToAttach = [];
                self.tag = {};

                self.addArticle = function (news) {
                    self.article.date = (new Date()).toLocaleString();
                    self.article.tags = self.tagsToAttach;
                    news.push(self.article);
                    self.article = {};
                };

                self.attachTag = function () {
                    var isEmptyTag = !self.tag.hasOwnProperty('name');
                    if (!isEmptyTag) {
                        self.tagsToAttach.push(self.tag);
                        self.tag = {};
                    }
                };
            }
        );
})();