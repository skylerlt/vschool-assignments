var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/create", {
            templateUrl: "pages/createProfile.html",
            controller: "MainController"
        })
});

app.controller("MainController", function ($scope, DatingService) {

    $scope.DatingService = DatingService;

    $scope.get = function () {
        $scope.toggle = false;
        DatingService.getUsers().then(function () {
            $scope.users = DatingService.userProfiles;
        })
    };

    $scope.create = function (user) {
        DatingService.postUsers(user).then(function () {
            $scope.users = null;
        })
    };

    $scope.update = function (user, index) {
        DatingService.editUsers(user, index)
            .then(function (userProfiles) {
                $scope.users = DatingService.userProfiles;
                user.update = false;
            })
    };

    $scope.delete = function (user, index) {
        DatingService.deleteUsers(user, index)
            .then(function (userProfiles) {
                $scope.users = DatingService.userProfiles;
            })
    };

    $scope.whatType = function (typeArray) {
        var typeString = "";
        for (i = 0; i < typeArray.length; i++) {
            if (typeArray[i].checked) {
                typeString += typeArray[i].value + ", ";
            }
        }
        return typeString;
    };

    $scope.toggle = false;

});

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
