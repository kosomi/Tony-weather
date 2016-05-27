//----------//
// Services

weatherApp.service('cityService', function() {

    this.city = "New York, NY";

})


weatherApp.service('weatherService', ['$resource', function($resource) {
    // API URL w/ Key--> http://api.openweathermap.org/data/2.5/forecast/daily?APPID=ab2c29c1a65afcd09ce6ca8905294549
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=d60e8fb8bd9cc3361a40d711b28030e1', {callback: 'JSON_CALLBACK'}, {get: {method: 'JSONP'}});

    var weatherAPIResult = weatherAPI.get({
      q: city,
      cnt: days
    });

    return weatherAPIResult;
  };
}]);