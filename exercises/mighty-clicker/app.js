var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, blueService, redService) {

    blueService.addCap().then(function () {
        $scope.total.cap = totalcap;
    });

    redService.addIronman().then(function () {
        $scope.total.ironMan = totalironman;
    });

});