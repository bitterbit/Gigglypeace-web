// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('homeController', function($scope) {
	// create a message to display in our view

	
			$scope.discussions = [
			{title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
			origin-lang:'he',number-of-views:50,
			image-link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
			sideA :'side a',sideB:'side b'sideACount:50,sideBCount:40,neutralCount:30},
		];
<<<<<<< HEAD

		// $http.get('/someurl').success
		// (function(data,status,headers,config) {
		// 	$scope.discussions=data;
		// }).error(function(data,status,headers,config) {

		// });
=======
>>>>>>> origin/master
});


