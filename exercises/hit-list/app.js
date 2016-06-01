var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, $http) {

    $http.get("http://mean.codingcamp.us:6543/hitlist.json")
        .then(function (response) {
            $scope.data = response.data;
        });
});