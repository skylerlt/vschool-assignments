var app = angular.module("DetailApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/pokemon", {
            templateUrl: "views/pokemon-list.html",
            controller: "PokemonListController"
        })
        .when("/pokemon/:pokemonId", {
            templateUrl: "views/pokemon-detail.html",
            controller: "PokemonDetailController"
        })
});

app.service("PokemonService", ["$http", function ($http) {
    var baseUrl = "http://pokeapi.co/api/v2/pokemon/";
    this.getPokemonList = function () {
        return $http.get(baseUrl).then(function (response) {
            return response.data.results;
        });
    };

    this.getPokemon = function (pokemonId) {
        var pokemon = {};
        return $http.get(baseUrl + pokemonId).then(function (response) {
            pokemon.name = response.data.name;
            pokemon.weight = response.data.weight;
            pokemon.ability = response.data.abilities[0].ability.name;
            pokemon.sprite = response.data.sprites.front_default;
            return pokemon;
        });
    }
}]);


app.controller("PokemonDetailController", ["$scope", "$routeParams", "PokemonService", function ($scope, $routeParams, PokemonService) {

    PokemonService.getPokemon($routeParams.pokemonId).then(function (pokemon) {
        $scope.pokemon = pokemon;
    });

}]);


app.controller("PokemonListController", ["$scope", "PokemonService", function ($scope, PokemonService) {
    PokemonService.getPokemonList().then(function (results) {
        $scope.pokemonList = results;
    })
}]);