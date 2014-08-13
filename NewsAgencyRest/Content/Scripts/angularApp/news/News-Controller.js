angular.module('news')
    .controller('NewsController', [
        'newsService', 'tagService', function (newsService, tagService) {
            'use strict';

            var self = this;
            self.newsInput = {};
            self.tagInput = {};
            self.visableNewsNumber = null;
            self.isFilterVisible = false;
            self.newsStore = [];
            self.tagStore = tagService.getAll();
            var newsPromise = newsService.getAll();

            newsPromise.then(function (newsData) {
                self.newsStore = newsData;
            });

            self.toogleFilterVisibility = function () {
                if (self.isFilterVisible === true) {
                    self.isFilterVisible = false;
                } else {
                    self.isFilterVisible = true;
                }

            };

            self.setNewsVisable = function (selected) {
                if (selected === self.visableNewsNumber) {
                    self.visableNewsNumber = null;
                } else {
                    self.visableNewsNumber = selected;
                }
            };

            self.clearForm = function () {
                self.newsInput = {};
                self.tagInput = {};
                self.tagStore = [];
                tagService.clearStore();
            };
            self.saveNews = function () {
                newsService.save(self.newsInput);
                self.clearForm();
            };

            self.addTag = function () {
                tagService.addTag(self.tagInput);
                self.tagStore = tagService.getAll();
                self.tagInput = {};
            };

            self.edit = function (id) {
                self.newsInput = angular.copy(newsService.getById(id));
            };

            self.delete = function (id) {
                newsService.delete(id);
            };
        }
    ]);