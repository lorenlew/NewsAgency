angular.module('news')
    .controller('ArticleController', function () {
            'use strict';
            var self = this;
            self.article = {};
            self.tagsToAttach = [];
            self.tag = {};

            self.addArticle = function (news) {
                self.article.date = (new Date()).toLocaleString();
                self.article.tags = self.tagsToAttach;
                news.push(self.article);
                self.tagsToAttach = [];
                self.article = {};
            };

            self.attachTag = function () {
                var isEmptyTag = !self.tag.hasOwnProperty('name');
                if (!isEmptyTag) {
                    self.tagsToAttach.push(self.tag);
                    self.tag = {};
                }
                return false;
            };
        }
    );