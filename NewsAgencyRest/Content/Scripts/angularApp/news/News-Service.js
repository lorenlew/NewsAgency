angular.module('news')
    .service('newsService', [
        '$http', 'tagService', '$q', 'uuid2', function ($http, tagService, $q, uuid2)
        {
            'use strict';
            var self = this;
            var deferred = $q.defer();

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
                        deferred.reject(data);
                    });
                return deferred.promise;
            };

            self.save = function (news) {
                if (typeof news.id === 'undefined') {
                    news.id = uuid2.newguid();
                    news.date = (new Date()).toLocaleString();
                    news.tags = tagService.getAll();
                    self.newsStore.push(news);
                } else {
                    var i;
                    for (i in self.newsStore) {
                        if (self.newsStore[i].id === news.id) {
                            var existingTags = news.tags;
                            var newTags = tagService.getAll() || [];
                            news.tags = existingTags.concat(newTags);
                            self.newsStore[i] = news;
                        }
                    }
                }
                self.sync();
            };

            self.delete = function (id) {
                var i;
                for (i in self.newsStore) {
                    if (self.newsStore[i].id == id) {
                        self.newsStore.splice(i, 1);
                    }
                }
                self.sync();
            };

            self.sync = function () {
                var news = angular.toJson(self.newsStore);
                $http.post('http://localhost:51045/api/news', news)
                    .success(function () {
                    })
                    .error(function () {
                    });
            };
        }
    ]);