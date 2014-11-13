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
			{title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
			origin-lang:'he',number-of-views:50,
			image-link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ'},
			sideA :'side a',sideB:'side b'sideACount:50,sideBCount:40,neutralCount:30},
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
		$http.get('/someurl').success
		(function(data,status,headers,config) {
			$scope.discussions=data;
		}).error(function(data,status,headers,config) {

		});
	});

	