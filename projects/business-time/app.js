var app = angular.module('BusinessApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('/main', {
        templateUrl: 'pages/main.html'
        , controller: 'MainController'
    })
    $routeProvider.when('/list', {
        templateUrl: 'pages/list.html'
        , controller: 'MainController'
    })
    $routeProvider.when('/prices', {
        templateUrl: 'pages/prices.html'
        , controller: 'MainController'
    })
    $routeProvider.when('/contact', {
        templateUrl: 'pages/contact.html'
        , controller: 'MainController'
    })
})

app.controller("MainController", function () {});