var app = angular.module("mainApp", ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/main", {
            templateUrl: "pages/main.html",
            controller: "MainController"
        })
        .when("/more", {
            templateUrl: "pages/more.html",
            controller: "SecondController"
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
            $scope.input = null;
        })
    }
});

app.controller("SecondController", function ($scope, MoreService) {

    $scope.getMore = function (moreInput) {
        MoreService.moreMovies(moreInput).then(function (moreMovie) {
            $scope.moreInfo = moreMovie;
            $scope.moreInput = null;
        })
    }
})