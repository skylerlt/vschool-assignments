var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope) {

    $scope.findSum = function (input1, input2) {
        $scope.addresult = parseInt(input1) + parseInt(input2);
    }

});

app.controller("SecondController", function ($scope) {

    $scope.findDifference = function (input3, input4) {
        $scope.differenceresult = parseInt(input3) * parseInt(input4);
    }

})