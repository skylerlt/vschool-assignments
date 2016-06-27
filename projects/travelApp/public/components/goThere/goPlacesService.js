var app = angular.module("mainApp");


app.service("GoPlacesService", function ($http) {

    var baseUrl = "http://localhost:8000/api/go-places/";
    this.goPlacesArray = [];
    var self = this;

    this.getGoPlaces = function () {
        return $http.get(baseUrl)
            .then(function (response) {
                self.goPlacesArray = response.data;
            });

    };

    this.postGoPlaces = function (goPlace) {
        return $http.post(baseUrl, goPlace)
            .then(function (response) {
                self.goPlacesArray.push(response.data);
            });
    };

    this.putGoPlaces = function (goPlace) {
        return $http.put(baseUrl + goPlace._id, goPlace)
            .then(function () {
                self.goPlacesArray.push(goPlace);
                return self.goPlacesArray;
            })
    }
});
