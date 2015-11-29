'use strict';
var app = angular.module('karma-unit',['ListApp']);
app.controller('appCtrl',['$scope','List',function($scope,List){
	$scope.name = 'karma-unit-demo';
	$scope.lists = List.get({id:'list'});
}]);
var ListApp = angular.module('ListApp',['ngResource'])
ListApp.factory('List',['$resource',function($resource){
	return $resource('/data/:id.json',{},{isArray:false});
}]);