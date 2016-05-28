# Tony-weather 

# Tony-weather 

1. index.html
build basic HTML structre.
ng-app = 'weatherApp'// make it as an Angular document.
put Css, Script in the <head>
put navbar, ng-view in the <body>

2. app.js
var weather = angular.module('weatherApp', ['ngRoute', 'ngResource']);

3. route.js
weatherApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: '../pages/home/html',
			controller: 'homeController'
		})
}])

4. controller.js
controll service.js and directive.js

5. service.js
build cityService, weatherService 
get API

6. directive.js
weatherApp.directive('weatherResults', function(){
	return {
		restrict: 'E', 
		templateUrl: '../directives/weatherResults.html',
		repalce: true,
		scope: {
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: '@'
		}
	}
});

