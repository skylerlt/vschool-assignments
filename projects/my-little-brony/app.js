var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/add", {
            templateUrl: "pages/add.html",
            controller: "MainController"
        })
        .when("/favorites", {
            templateUrl: "pages/favorites.html",
            controller: "MainController"
        })
});

app.controller("MainController", function ($scope, PonyService) {

    $scope.PonyService = PonyService;

    $scope.getPonies = function () {
        PonyService.getPonies().then(function () {
            $scope.ponies = PonyService.ponyList;
        })
    }

    $scope.postMyPonies = function (pony) {
        PonyService.postPonies(pony).then(function (myPonies) {
            $scope.ponies = PonyService.ponyList;
            $scope.pony = null;
        })
    }

    $scope.removePonies = function (pony, index) {
        var confirmed = confirm("Are you sure?  Once it's gone, it's gone!");
        if (confirmed) {
            PonyService.deletePonies(pony, index).then(function (myPonies) {
                $scope.ponies = PonyService.ponyList;
            })
        }
    }
});
