// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('homeController', function($scope) {
	// create a message to display in our view

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