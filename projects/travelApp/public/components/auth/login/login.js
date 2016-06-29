var app = angular.module("mainApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", "$window", function ($scope, $location, UserService, $window) {

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $window.location.assign("main.html");
        }, function (response) {
            alert("There was a problem: " + response.data.message);
        });
    };

}]);
