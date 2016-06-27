var app = angular.module("mainApp", ["ngRoute", "mainApp.Auth"]);

app.config(function ($routeProvider) {
    $routeProvider
    //        .when("/", {
    //            templateUrl: "index.html"
    //        })
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
        .when("/login ", {
            template: "main.html",
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
