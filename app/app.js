"use strict";

var app = angular.module('routeApp', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/main.html'
	})
	.when('/pch', {
		templateUrl: 'partials/pch.html'

	})
	.when('/r66', {
		templateUrl: 'partials/route66.html'
	})
	.otherwise('/');
});