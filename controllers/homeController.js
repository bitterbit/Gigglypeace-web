// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('homeController', function($scope) {
	// create a message to display in our view

	
			$scope.discussions = [
			{title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
			origin_lang:'he',number_of_views:50,
			image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
			sideA :'side a',sideB:'side b',sideACount:50,sideBCount:40,neutralCount:30},
		];
});


