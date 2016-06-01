var app = angular.module("mainApp");

app.service("ServiceController", ["$http", function ($http) {
    var baseUrl = "http://pokeapi.co/";

    this.getPokemon = function (input) {
        var myPokemon = {};
        return $http.get(baseUrl + "api/v1/pokedex/1/")
            .then(function (response) {
                myPokemon.name = response.data.pokemon[input - 1].name;
                return $http.get(baseUrl + response.data.pokemon[input - 1].resource_uri);
            })
            .then(function (response) {
                myPokemon.ability = response.data.abilities[0].name;
                myPokemon.attack = response.data.attack;
                return $http.get(baseUrl + response.data.sprites[0].resource_uri);
            })
            .then(function (response) {
                myPokemon.sprite = baseUrl + response.data.image;
                return myPokemon;
            })
    }
}]);