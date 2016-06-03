var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/favorites", {
            templateUrl: "pages/favorites.html",
            controller: "MainController"
        })
        .when("/add", {
            templateUrl: "pages/add.html",
            controller: "MainController"
        })
        .when("/contact", {
            templateUrl: "pages/contact.html",
            controller: "MainController"
        })

});

app.controller("MainController", function ($scope, PonyService) {

    $scope.ponyService = PonyService;

    $scope.getPonies = function () {
        PonyService.getPonies().then(function () {
            $scope.ponies = PonyService.ponyList;
        })
    }

    $scope.postMyPonies = function (pony) {
        PonyService.postPonies(pony).then(function (myPonies) {
            $scope.ponies = PonyService.ponyList;
        })
    }

    $scope.removePonies = function (pony) {
        var confirmed = confirm("Are you sure?  Once it's gone, it's gone!");
        if (confirmed) {
            PonyService.deletePonies(pony).then(function (myPonies) {
                $scope.ponies = PonyService.ponyList;
            })
        }
    }
});
