var app = angular.module("mainApp");

app.controller("ExerciseController", ["$scope", "ExerciseService", function ($scope, ExerciseService) {

    $scope.exerciseService = ExerciseService;

    $scope.exerciseService.getUpperBody().then(function (response) {
        $scope.uBEx = response.data;
    });

    $scope.exerciseService.getLowerBody().then(function (response) {
        $scope.lBEx = response.data;
    });

    $scope.select = function (selected) {
        $scope.selected = selected
    };

}])
