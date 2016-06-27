var app = angular.module("mainApp.Auth");

app.controller("LoginController", function ($scope, $location, UserService, $window) {
    $scope.login = function (user) {
        UserService.login(user).then(function (response) {
            $window.location.href = "main.html";
        });
    };
});
