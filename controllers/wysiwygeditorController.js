// create the controller and inject Angular's $scope
angular.module('jigglyApp').controller('wysiwygeditor', function($scope, $routeParams, $http) {

	var url = "http://api.diffbot.com/v3/article?token=16eeff32ac2a113670ac54fc8c0f3e92&url="+$routeParams.url;

	$http.get(url).success(function(data, status, headers, config){
		
		var article = data.objects[0];
		$scope.orightml = article.html;
		console.log(article.html);
		$scope.htmlcontent = $scope.orightml;
	 	$scope.disabled = false;

	}).error(function(data, status, headers, config){
		console.log('error', data, status, headers, config)
	});	  
	console.log('route:', $routeParams);	

  ////
  // Masquerade perfers the scope value over the innerHTML
  // Uncomment this line to see the effect:
});