var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/main", {
            templateUrl: "pages/main.html",
            controller: "MainController"
        })
        .when("/about", {
            templateUrl: "pages/about.html",
            controller: "MainController"
        })
        .when("/contact", {
            templateUrl: "pages/contact.html",
            controller: "MainController"
        })

})

app.controller("MainController", function ($scope, AppService) {

    $scope.findMovie = function (input) {
        AppService.getMovie(input).then(function (myMovie) {
            $scope.movieInfo = myMovie;
        })

    }
})