// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('postTwoController', function($scope, $routeParams, $http) {
	console.log('this is the post controller');

	console.log($routeParams);
	
	//http://api.diffbot.com/v3/article?token=16eeff32ac2a113670ac54fc8c0f3e92&url=http://edition.cnn.com/2014/11/13/world/europe/russia-bombers-plan/index.html?hpt=hp_t1
	var url = "http://api.diffbot.com/v3/article?token=16eeff32ac2a113670ac54fc8c0f3e92&url=http://edition.cnn.com/2014/11/13/world/europe/russia-bombers-plan/index.html?hpt=hp_t1"
	
	$http.get(url).success(function(data, status, headers, config){
		var article = data.objects[0];
		$scope.orightml = article.html;
		console.log(article);
	}).error(function(data, status, headers, config){
		console.log('error', data, status, headers, config)
	});
});