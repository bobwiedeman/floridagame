'use strict';
//var paApp=angular.module('mainCtrl',['paFilters','ngAnimate','paDirective']);
var paApp=angular.module('mainCtrl',[]);

paApp.controller("mainController",function($scope,FeedService){
    $scope.name='rob';
    $scope.loadButonText="Load";
    $scope.loadFeed=function(feedSrc){
        FeedService.parseFeed(feedSrc).then(function(res){
//            $scope.loadButonText=angular.element(e.target).text();
            $scope.feeds=res.data.responseData.feed.entries;
        });
        console.log($scope.feeds);

    }
});