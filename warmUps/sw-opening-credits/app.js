var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, $http) {

    $http.get("https://swapi.co/api/films/1")
        .then(function (response) {
            $scope.movie = response.data;
        })


})