
var jigglyApp = angular.module('jigglyApp', ['ngRoute', 'textAngular']);

// configure our routes
jigglyApp.config(function($routeProvider) {	
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'homeController'
		})
		.when('/discussion/:id?', {
			templateUrl : 'templates/discussion.html',
			controller  : 'discussionController'
		})
		.when('/post', {
			templateUrl : 'templates/postOne.html',
			controller  : 'postOneController'
		})
		.when('/post2', {
			templateUrl : 'templates/postTwo.html',
			controller  : 'postTwoController'
		})
		.when('/post2/:url*', {
			templateUrl : 'templates/postTwo.html',
			controller  : 'postTwoController'
		})
});