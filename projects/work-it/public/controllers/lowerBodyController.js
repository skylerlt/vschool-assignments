var app = angular.module("mainApp");

app.controller("LowerBodyController", ["$scope", "ExerciseService", function ($scope, ExerciseService) {

    $scope.exerciseService = ExerciseService;

    $scope.exerciseService.getLowerBody().then(function (response) {
        $scope.lBEx = response.data;
    });

    $scope.selectLB = function (selected) {
        $scope.selected = selected;
    };

}])
