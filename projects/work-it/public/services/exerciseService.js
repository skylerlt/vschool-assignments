var app = angular.module("mainApp");

app.service("ExerciseService", ["$http", function ($http) {

    this.getUpperBody = function () {
        return $http.get("api/upperBody");
    };

    this.getLowerBody = function () {
        return $http.get("api/lowerBody");
    };

    this.getCore = function () {
        return $http.get("api/core");
    };

    this.getCardio = function () {
        return $http.get("api/cardio");
    };
}])
