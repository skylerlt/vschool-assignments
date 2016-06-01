var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, $http) {

    $scope.todoList = [];
    var baseUrl = "http://mean.codingcamp.us/skylertalbot/todo/"

    $scope.addItem = function (item) {
        item.completed = false;

        $http.post(baseUrl, item).then(function (response) {
            $scope.todoList.push(response.data)
            $scope.item = {};
        });
    }

    $scope.delete = function (item) {
        var confirmed = confirm("Are you sure?  Once it's gone, it's gone!");
        if (confirmed) {
            $http.delete(baseUrl + item._id).then(function (response) {
                $scope.todoList.splice(item, 1);
            })
        }
    }

    $scope.seeItems = function () {
        $http.get(baseUrl).then(function (response) {
            $scope.todoList = response.data;
        })
    }

    $scope.editItems = function (item, index) {
        $http.put(baseUrl + item._id, item).then(function (response) {
            $scope.todoList[index] = response.data;
            item.editing = false;
        })
    }

});