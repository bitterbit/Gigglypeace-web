// create the module and name it jigglyApp
var jigglyApp = angular.module('jigglyApp', ['ngRoute']);

// configure our routes
jigglyApp.config(function($routeProvider) {

	console.log("in router");
	
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

	