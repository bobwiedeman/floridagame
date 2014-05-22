'use strict';

// Declare app level module which depends on filters, and services
//var paApp=angular.module('PropertyAppraiser',['ngAnimate','ui.bootstrap','ui.event','MapCtrl','ui.map','mainCtrl']);
//var paApp=angular.module('PropertyAppraiser',['ui.event','MapCtrl','ui.map']);
//http://propertyappraiser.com/pa02/seofiles/seodirect.php?seo={C:1}

var paApp=angular.module('FloridaGame',
    [
    'mainCtrl',
    'ui.router',
    'stateService',
    'HashBangURLs',
        'feedSvc'

    ])

angular.module('HashBangURLs', []).config(['$locationProvider', function($location) {
    $location.hashPrefix('!');
}]);