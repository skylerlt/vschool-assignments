var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "pages/home.html",
            controller: "MainController"
        })
        .when("/about", {
            templateUrl: "pages/about.html",
            controller: "MainController"
        })
        .when("/whyIlove", {
            templateUrl: "pages/whyIlove.html",
            controller: "MainController"
        })
        .otherwise({
            templateUrl: "index.html",
            controller: "MainController"
        })

});