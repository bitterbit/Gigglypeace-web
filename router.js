@@ -1,5 +1,5 @@
// create the module and name it jigglyApp
var jigglyApp = angular.module('jigglyApp', ['ngRoute']);
var jigglyApp = angular.module('jigglyApp', ['ngRoute', 'textAngular']);

// configure our routes
jigglyApp.config(function($routeProvider) {
@@ -21,5 +21,4 @@ jigglyApp.config(function($routeProvider) {
			controller  : 'postController'
		})
});