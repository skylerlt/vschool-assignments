var app = angular.module("mainApp");

app.service("WorkoutService", ["$http", function ($http) {

    this.getExercises = function () {
        return $http.get("api/exercises");
    }

    this.postExercises = function (exercise) {
        return $http.post("api/exercises", exercise);
    };


}]);
