var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope) {

    $scope.page = [];
    $scope.newPost = function (post) {
        $scope.page.push(post);
        $scope.post = {};

        $scope.delete = function (index) {
            $scope.page.splice(index, 1);
        }
    };

});