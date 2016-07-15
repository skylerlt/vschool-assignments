var app = angular.module("mainApp", ["ngRoute", "mainApp.Auth", "ngAnimate"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "/pages/home.html"
        })
        .when("/workouts", {
            templateUrl: "/pages/workouts.html"
        })
        .when("/gallery", {
            templateUrl: "/pages/gallery.html"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })

});


$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});
