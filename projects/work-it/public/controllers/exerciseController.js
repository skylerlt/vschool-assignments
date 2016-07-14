var app = angular.module("mainApp");

app.controller("ExerciseController", ["$scope", "ExerciseService", function ($scope, ExerciseService) {

    $scope.exerciseService = ExerciseService;
    $scope.workOutList = [];
    console.log("My list: " + $scope.workOutList);

    $scope.exerciseService.getUpperBody().then(function (response) {
        $scope.uBEx = response.data;
    });

    $scope.selectUB = function (selected) {
        $scope.selected = selected;
    };

    $scope.exerciseService.getLowerBody().then(function (response) {
        $scope.lBEx = response.data;
    });

    $scope.selectLB = function (selected) {
        $scope.selected = selected;
    };

    $scope.exerciseService.getCore().then(function (response) {
        $scope.cEx = response.data;
    });

    $scope.selectCore = function (selected) {
        $scope.selected = selected;
    };

    $scope.exerciseService.getCardio().then(function (response) {
        $scope.runs = response.data;
    });

    $scope.selectCardio = function (selected) {
        $scope.selected = selected;
    };

    $scope.exerciseService.getExercises().then(function (response) {
        $scope.workOutList = response.data;
    })

    $scope.saveEx = function (selected) {
        $scope.exerciseService.postExercises(selected)
            .then(function (response) {
                $scope.workOutList.push(response.data);
            })
    };

}])
