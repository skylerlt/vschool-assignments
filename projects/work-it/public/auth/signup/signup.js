var app = angular.module("mainApp.Auth");

app.controller("SignupController", function ($scope, $location, UserService) {
    $scope.passwordMessage = "";

    $scope.signup = function (user) {
        if (user.password !== $scope.passwordRepeat) {
            $scope.passwordMessage = "Passwords do not match.";
        } else {
            UserService.signup(user).then(function (response) {
                $location.path("/login");
            }, function (response) {
                alert("There was a problem: " + response.data.message);
                console.log(response.data);
            });
        }
    }
});
