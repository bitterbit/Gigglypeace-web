// // create the controller and inject Angular's $scope
// angular.module('jigglyApp').controller('homeController', function($scope) {
// 	// create a message to display in our view
// 			$scope.discussions = [
// 			{title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
// 			origin-lang:'he',number-of-views:'50',
// 			image-link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
// 			sideA :'side a',sideB:'side b'sideACount:'50',sideBCount:'40',neutralCount:'30'},
// 			// {title :'Tel Aviv', firstComment : 'Everybody hates it.', author: 'Gal Bolbo]l Katan'},
// 		];
// });
// create the controller and inject Angular's $scope
	angular.module('jigglyApp').controller('discussionController', function($scope) {
	 console.log('this is the discussion controller');
	});
	// create the controller and inject Angular's $scope
	angular.module('jigglyApp').controller('homeController', function($scope) {
	 // create a message to display in our view
	

	 $scope.discussions = [
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
 				origin_lang:'he' ,number_of_views:3, width: '3',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '6',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '3',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '8',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Bolbol Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '4',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
	 ];
	});