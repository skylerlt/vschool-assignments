var app = angular.module("mainApp");

app.service("TipService", ["$http", function ($http) {

    this.getTip = function () {
        return $http.get("api/tips");
    };

}]);
