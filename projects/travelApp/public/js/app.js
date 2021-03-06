var app = angular.module("mainApp", ["ngRoute", "mainApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/beenThere", {
            templateUrl: "components/beenThere/beenThere.html",
            controller: "PlaceController"
        })
        .when("/goThere", {
            templateUrl: "components/goThere/goThere.html",
            controller: "PlaceController"
        })
        .when("/add", {
            templateUrl: "components/places/addPlace.html",
            controller: "PlaceController"
        })
        .when("/signup", {
            templateUrl: "components/auth/signup/signup.html",
            controller: "SignupController"
        })
        .when("/login", {
            templateUrl: "components/auth/login/login.html",
            controller: "LoginController"
        })
        .when("/logout", {
            controller: "LogoutController",
            template: ""
        })
        .when("/main ", {
            templateUrl: "main.html",
            controller: "PlaceController"
        })
});
