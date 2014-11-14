// create the controller and inject Angular's $scope
	angular.module('jigglyApp').controller('discussionController', function($scope) {
	 console.log('this is the discussion controller');
	});
	// create the controller and inject Angular's $scope
	angular.module('jigglyApp').controller('homeController', function($scope) {
	 // create a message to display in our view
	

	 $scope.discussions = [
			{
				title :'\'The Look of Silence\': The film making Indonesia face its brutal history', 
				description : '(CNN) -- The Graha Bhakti Budaya (or GBB as it\'s locally known), is a care-worn, 1960s slab of a building, popular as part of Jakarta\'s largest arts center, but outwardly unremarkable.Yet what happened inside on Monday, the Indonesian premiere of documentary \"The Look of Silence\", has for some made it more than a theater space and transformed it into a site of huge importance for the development of Indonesia\'s democracy.\"That screening on Monday night was a big, big moment," says 54-year-old Irawan Karseno. "There are deep wounds in our nation since 1965 and this movie is like a healing process.\" As head of the Jakarta Arts Council, Karseno was instrumental in bringing the film, Joshua Oppenheimer\'s companion piece to last year\'s Oscar-nominated \"The Act of Killing\", to a captivated audience of around 1,500 people.',	publisher: 'Eitan Gadol',
 				origin_lang:'he' ,number_of_views:3, width: '12',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '4',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '4',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '4',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
			{
				title :'woho', description : 'I like Jigglipeace',	publisher: 'Eitan Gadol',
 				origin_lang:'he' ,number_of_views:3,width: '8',
				image_link:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSMStbAt9oDDMHa2gXldmXHZUsagTS8YHavp09NxEP-jUIIku1gZQ',
				sideA :'side a',sideB:'side b',sideACount:6,sideBCount:4,neutralCount:4
			},
	 ];
	});