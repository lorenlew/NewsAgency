angular.module('news')
.service('tagService', ['uuid2', function (uuid2)
{
    'use strict';
    var self = this;
    var tagStore = [];

    self.addTag = function (tag) {
        var isEmptyTag = !tag.hasOwnProperty('name');
        if (!isEmptyTag) {
            tag.id = uuid2.newguid();
            tagStore.push(tag);
        };
    };

    self.getAll = function () {
        return tagStore;
    };

    self.clearStore = function () {
        tagStore = [];
    }
}]);