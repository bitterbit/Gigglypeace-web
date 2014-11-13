// create the module and name it jigglyApp
var jigglyApp = angular.module('jigglyApp', ['ngRoute']);

// configure our routes
jigglyApp.config(function($routeProvider) {
	console.log($routeProvider);
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'homeController'
		})
});

	