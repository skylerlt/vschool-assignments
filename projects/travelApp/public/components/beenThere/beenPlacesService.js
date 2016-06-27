var app = angular.module("mainApp");


app.service("BeenPlacesService", function ($http) {

    var baseUrl = "http://localhost:8000/api/been-places/";
    this.beenPlacesArray = [];
    var self = this;

    this.getBeenPlaces = function () {
        return $http.get(baseUrl)
            .then(function (response) {
                self.beenPlacesArray = response.data;
            });

    };

    this.postBeenPlaces = function (beenPlace) {
        return $http.post(baseUrl, beenPlace)
            .then(function (response) {
                self.beenPlacesArray.push(response.data);
            });
    };
});
