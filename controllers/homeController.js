// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('homeController', function($scope) {
	// create a message to display in our view

	$scope.discussions = [
			
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


