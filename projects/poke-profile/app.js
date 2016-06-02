var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", "ServiceController", function ($scope, ServiceController) {

    $scope.getNumber = function (input) {
        ServiceController.getPokemon(input).then(function (myPokemon) {
            $scope.pokemon = myPokemon;
        })
    }
}]);

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});