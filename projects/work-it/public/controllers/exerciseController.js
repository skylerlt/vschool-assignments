var app = angular.module("mainApp");

app.controller("ExerciseController", ["$scope", "ExerciseService", "WorkoutService", function ($scope, ExerciseService, WorkoutService) {

    $scope.exerciseService = ExerciseService;
    $scope.workoutService = WorkoutService;
    $scope.workOutList = [];

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

    $scope.workoutService.getExercises().then(function (response) {
        $scope.workOutList = response.data;
    })

    $scope.saveEx = function (selected) {
        $scope.workoutService.postExercises(selected)
            .then(function (response) {
                $scope.workOutList.push(response.data);
            })
    };

    $scope.deleteAll = function () {
        var confirmed = confirm("Are you sure?  This will delete you're entire workout!");
        if (confirmed) {
            $scope.workoutService.deleteAllEx()
    .then(function (response) {
            $scope.workOutList = response.data;
                })
        }
    };


    $scope.deleteExercise = function (exercise) {
        $scope.workoutService.deleteEx(exercise._id)
            .then(function (response) {
                $scope.workOutList.splice(($scope.workOutList.indexOf(exercise)), 1);
            });
    };

}])
