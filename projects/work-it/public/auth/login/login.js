var app = angular.module("mainApp.Auth");

app.controller("LoginController", ["$scope", "$location", "UserService", function ($scope, $location, UserService) {

    //    $scope.logIn = function (user) {
    //        authService.login(user).then(function (response) {
    //            $scope.token = true;
    //            $location.path("/home");
    //        });
    //    };

    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $scope.token = true;
            $location.path("/home");
        }, function (response) {
            alert("There was a problem: " + response.data.message);
        });
    };
}]);
