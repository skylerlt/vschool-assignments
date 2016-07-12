var app = angular.module("mainApp");

app.controller("TipController", ["$scope", "TipService", function ($scope, TipsService) {

    $scope.tipService = TipsService;

    $scope.tipService.getTip().then(function (response) {
        $scope.tips = response.data[Math.floor(Math.random() * response.data.length)];
    });

}]);
