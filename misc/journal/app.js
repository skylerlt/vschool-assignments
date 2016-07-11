var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/new", {
            templateUrl: "pages/newEntry.html",
            controller: "MainController"
        })
        .when("/photos", {
            templateUrl: "pages/photos.html",
            controller: "MainController"
        })

});
