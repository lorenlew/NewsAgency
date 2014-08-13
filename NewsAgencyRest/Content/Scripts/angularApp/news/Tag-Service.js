angular.module('news')
.service('tagService', function () {
    'use strict';
    var self = this;
    var tagStore = [];

    self.addTag = function (tag) {
        var isEmptyTag = !tag.hasOwnProperty('name');
        if (!isEmptyTag) {
            tagStore.push(tag);
        };
    };

    self.getAll = function () {
        return tagStore;
    };

    self.clearStore = function () {
        tagStore = [];
    }
});