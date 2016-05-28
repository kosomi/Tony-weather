# Tony-weather 

1. index.html								<br>
build basic HTML structre.						<br>
ng-app = 'weatherApp'// make it as an Angular document.			<br>
put Css, Script in the <head>						<br>
put navbar, ng-view in the <body>					<br>
					<br>
2. app.js					<br>
var weather = angular.module('weatherApp', ['ngRoute', 'ngResource']);					<br>
					<br>
3. route.js					<br>
weatherApp.config(['$routeProvider', function($routeProvider){					<br>
	$routeProvider					<br>				 
		.when('/', {					<br>				 
			templateUrl: '../pages/home/html',					<br>
			controller: 'homeController'					<br>
		})					<br>
}])					<br>
					<br>
4. controller.js					<br>
controll service.js and directive.js					<br>
					<br>
5. service.js					<br>				 
build cityService, weatherService 					<br>
get API									<br> 
					<br>
6. directive.js					<br>
weatherApp.directive('weatherResults', function(){					<br>
	return {					<br>
		restrict: 'E', 					<br>
		templateUrl: '../directives/weatherResults.html',					<br>
		repalce: true,					<br>
		scope: {					<br>
			weatherDay: '=',					<br>
			convertToStandard: '&',					<br>
			convertToDate: '&',					<br>
			dateFormat: '@'					<br>
		}					<br>
	}					<br>
});					<br>
					<br>
