var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.people = [];
    $scope.colors = ['red', 'blue', 'green']

    $scope.addPerson = function (person) {
        $scope.people.push(person);
        $scope.person = {};
    };

}]);