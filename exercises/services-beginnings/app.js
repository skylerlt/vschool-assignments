var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope) {

    $scope.pokemonList = [];

    $scope.addPokemon = function (pokemon) {
        $scope.pokemonList.push(pokemon);
        $scope.name = "";
    }

    $scope.deletePokemon = function (pokemon) {
        var index = $scope.pokemonList.indexOf(pokemon)
        if (index >= 0) {
            $scope.pokemonList.splice(index, 1);
        } else {
            alert("That doesn't match a name in the database.")
        }
    }

});