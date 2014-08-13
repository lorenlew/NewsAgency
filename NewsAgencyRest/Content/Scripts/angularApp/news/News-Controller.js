angular.module('news')
    .controller('NewsController', [
        'newsService', 'tagService', function (newsService, tagService) {
            'use strict';

            var self = this;
            self.newsInput = {};
            self.tagInput = {};
            self.visableNewsNumber = null;
            self.isFilterVisible = false;
            self.newsStore = newsService.getInit();
            self.tagStore = tagService.getAll();
            var newsPromise = newsService.getAll();

            newsPromise.then(function (newsData) {
                self.newsStore = newsData;
                newsService.newsStore = newsData;
            });

            this.toogleFilterVisibility = function () {
                if (self.isFilterVisible === true) {
                    self.isFilterVisible = false;
                } else {
                    self.isFilterVisible = true;
                }

            };

            this.setNewsVisable = function (selected) {
                if (selected === self.visableNewsNumber) {
                    self.visableNewsNumber = null;
                } else {
                    self.visableNewsNumber = selected;
                }
            };

            self.saveNews = function () {
                newsService.save(self.newsInput);
                self.newsInput = {};
                tagService.clearStore();
            };

            self.addTag = function () {
                tagService.addTag(self.tagInput);
                self.tagInput = {};
            };

            self.edit = function (id) {
                var test = newsService.getById(id);
                self.newsInput = angular.copy(newsService.getById(id));
            };

            self.delete = function (id) {
                newsService.delete(id);
                if (self.newsInput.id == id) {
                    self.newsInput = {};
                }
            };
        }
    ]);