var app = angular.module("StarWarsApp", []);

app.service("StarWarsService", ["$http", function ($http) {
    var baseUrl = "http://swapi.co/api";
    this.getNameAndHomeworld = function () {
        var character = {};

        // This returns a promise
        return $http.get(baseUrl + "/people/1").then(function (response) {

            // Add the name to the character object
            character.name = response.data.name;

            // Get the info on the homeworld
            return $http.get(response.data.homeworld);

            // This response is all about the homeworld
        }).then(function (response) {

            // Set the homeworld property on the character
            character.homeWorld = response.data.name;

            // return the character with the name and homeworld
            return character;
        });
    };

}]);

app.controller("CharacterController", ["$scope", "StarWarsService", function ($scope, StarWarsService) {

    StarWarsService.getNameAndHomeworld().then(function (character) {
        $scope.character = character;
    });
}]);