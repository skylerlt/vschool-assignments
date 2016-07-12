var app = angular.module("mainApp");

app.controller("CardioController", ["$scope", "ExerciseService", function ($scope, ExerciseService) {

    $scope.exerciseService = ExerciseService;

    $scope.exerciseService.getCardio().then(function (response) {
        $scope.runs = response.data;
    });

    $scope.selectCardio = function (selected) {
        $scope.selected = selected;
    };

}])
