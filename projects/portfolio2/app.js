var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/project1", {
            templateUrl: "project1.html",
            controller: "MainController"
        })
        .when("/project2", {
            templateUrl: "project2.html",
            controller: "MainController"
        })
        .when("/project3", {
            templateUrl: "project3.html",
            controller: "MainController"
        })

});

app.controller("MainController", function ($scope) {

});
