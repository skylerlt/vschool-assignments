var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, blueService, redService) {

    $scope.total = {};

    $scope.voteCap = function () {
        $scope.total.cap = blueService.addCap();
        $scope.total.ironman = redService.removeIronMan();
    }

    $scope.voteIron = function () {
        $scope.total.ironman = redService.addIronman();
        $scope.total.cap = blueService.removeCap();
    };

});
