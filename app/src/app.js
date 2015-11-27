'use strict';
var app = angular.module('karma-unit',[]);
app.controller('appCtrl',['$scope',function($scope){
	$scope.name = 'karma-unit-demo';
}]);