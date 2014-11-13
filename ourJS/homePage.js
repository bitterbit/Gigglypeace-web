angular.module('discussionsApp', [])
.controller('DiscussionsController', ['$scope', function($scope) {
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
}]);