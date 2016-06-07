var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, $http) {

    var todoList = [];
    var baseUrl = "http://localhost:8000/todo/";

    $scope.add = function (item) {
        $http.post(baseUrl, item).then(function (response) {
            $scope.todoList.push(response.data);
            $scope.item = {};
        })
    };

    $scope.find = function () {
        $http.get(baseUrl).then(function (response) {
            $scope.todoList = response.data;
        })
    };

    $scope.remove = function (item) {
        $http.delete(baseUrl + item.id).then(function (response) {
            $scope.splice.todoList(response, 1);

        })
    };

    $scope.getById = function (item) {
        $http.get(baseUrl + item.id).then(function (response) {
            $scope.todoList = response.data;
        })
    }


})
