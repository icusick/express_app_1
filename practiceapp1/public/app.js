var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.ejs.html',
		controller: 'mainController'
	})

	.when('/second', {
		templateUrl: 'pages/second.ejs.html',
		controller: 'secondController'
	})

	.when('/third', {
		templateUrl: 'pages/contact.ejs.html',
		controller: 'thirdController'
	})


});