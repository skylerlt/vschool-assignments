var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", "ServiceController", function ($scope, ServiceController) {

    $scope.getNumber = function (input) {
        ServiceController.getPokemon(input).then(function (myPokemon) {
            $scope.pokemon = myPokemon;
        })
    }
}]);