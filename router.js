	// create the module and name it jigglyApp
	var jigglyApp = angular.module('jigglyApp', ['ngRoute']);

	// configure our routes
	jigglyApp.config(function($routeProvider) {
		console.log($routeProvider);
		$routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'templates/home.html',
				controller  : 'mainController'
			})
	});

	// create the controller and inject Angular's $scope
	jigglyApp.controller('mainController', function($scope) {
		// create a message to display in our view
		console.log('ASasAS');
		console.log($scope);

		//$scope.discussions = [];
		$scope.discussions = [
			{title :'woho', firstComment : 'I like Jigglipeace',	author: 'Eitan Bolbol Gadol'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
			{title :'Tel Aviv', firstComment : 'Everybody hates it.',	author: 'Gal Bolbol Katan'},
		];
	});

	