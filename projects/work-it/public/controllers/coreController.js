var app = angular.module("mainApp");

app.controller("CoreController", ["$scope", "ExerciseService", function ($scope, ExerciseService) {

    $scope.exerciseService = ExerciseService;

    $scope.exerciseService.getCore().then(function (response) {
        $scope.cEx = response.data;
    });

    $scope.selectCore = function (selected) {
        $scope.selected = selected;
    };

}])
