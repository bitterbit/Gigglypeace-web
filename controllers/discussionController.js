// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('discussionController', function($scope) {
	console.log('this is the discussion controller');


	$http.get('transalte?text=This is my text').success(function(data){
		console.log(data);
	}).error(function(){
		console.log('error')
	});
});