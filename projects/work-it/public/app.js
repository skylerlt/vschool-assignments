var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/workouts", {
            templateUrl: "pages/workouts.html",
            //            controller: "MainController"
        })
        .when("/gallery", {
            templateUrl: "pages/gallery.html",
            //            controller: "MainController"
        })

});
