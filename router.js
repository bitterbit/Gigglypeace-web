
var jigglyApp = angular.module('jigglyApp', ['ngRoute', 'textAngular']);

// configure our routes
jigglyApp.config(function($routeProvider) {	
	$routeProvider
		// route for the home page
		.when('/', {
			templateUrl : 'templates/home.html',
			controller  : 'homeController'
		})
		.when('/discussion', {
			templateUrl : 'templates/discussion.html',
			controller  : 'discussionController'
		})
		.when('/post', {
			templateUrl : 'templates/post.html',
			controller  : 'postController'
		})
});