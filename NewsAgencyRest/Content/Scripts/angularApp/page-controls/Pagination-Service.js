angular.module('pageControls')
    .service('paginationService', function () {
        'use strict';

        var instances = {};
        var lastRegisteredInstance;
        this.paginationDirectiveInitialized = false;

        this.registerInstance = function (instanceId) {
            if (typeof instances[instanceId] === 'undefined') {
                instances[instanceId] = {
                    asyncMode: false
                };
                lastRegisteredInstance = instanceId;
            }
        };

        this.isRegistered = function (instanceId) {
            return (typeof instances[instanceId] !== 'undefined');
        };

        this.getLastInstanceId = function () {
            return lastRegisteredInstance;
        };

        this.setCurrentPageParser = function (instanceId, val, scope) {
            instances[instanceId].currentPageParser = val;
            instances[instanceId].context = scope;
        };
        this.setCurrentPage = function (instanceId, val) {
            instances[instanceId].currentPageParser.assign(instances[instanceId].context, val);
        };
        this.getCurrentPage = function (instanceId) {
            return instances[instanceId].currentPageParser(instances[instanceId].context);
        };

        this.setItemsPerPage = function (instanceId, val) {
            instances[instanceId].itemsPerPage = val;
        };
        this.getItemsPerPage = function (instanceId) {
            return instances[instanceId].itemsPerPage;
        };

        this.setCollectionLength = function (instanceId, val) {
            instances[instanceId].collectionLength = val;
        };
        this.getCollectionLength = function (instanceId) {
            return instances[instanceId].collectionLength;
        };

        this.setAsyncModeTrue = function (instanceId) {
            instances[instanceId].asyncMode = true;
        };

        this.isAsyncMode = function (instanceId) {
            return instances[instanceId].asyncMode;
        };
    });