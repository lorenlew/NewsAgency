angular.module('news')
    .service('newsService', [
        '$http', 'tagService', '$q', function ($http, tagService, $q) {
            'use strict';
            var self = this;
            var deferred = $q.defer();
            var uid = 1;
            self.newsStore = [];

            self.getById = function (id) {
                var i;
                for (i in self.newsStore) {
                    if (self.newsStore[i].id == id) {
                        return self.newsStore[i];
                    }
                }
                return null;
            };

            self.getAll = function () {
                $http.get('http://localhost:51045/api/news')
                    .success(function (data) {
                        self.newsStore = angular.fromJson(data.Data);
                        deferred.resolve(self.newsStore);
                    })
                    .error(function (data) {
                        deferred.reject();
                    });
                return deferred.promise;
            };

            self.getInit = function () {
                return self.newsStore;
            };

            self.save = function (news) {
                if (news.id === null) {
                    news.id = uid++;
                    news.date = (new Date()).toLocaleString();
                    news.tags = tagService.getAll();
                    self.newsStore.push(news);
                } else {
                    var i;
                    for (i in self.newsStore) {
                        if (self.newsStore[i].id == news.id) {
                            self.newsStore[i] = news;
                        }
                    }
                    self.newsStore[news.id] = news;
                }

            };

            self.delete = function (id) {
                var i;
                for (i in self.newsStore) {
                    if (self.newsStore[i].id == id) {
                        self.newsStore.splice(i, 1);
                    }
                }
            };

        }
    ]);