var app = angular.module("mainApp");

app.directive("navBar", function () {
    return ({
        restrict: "E",
        scope: "=",
        templateUrl: "./directive/navbar.html"

    })
});
