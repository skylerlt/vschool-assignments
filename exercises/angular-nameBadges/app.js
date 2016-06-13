var app = angular.module("mainApp", []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.people = [
        {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        },
        {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        },
        {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        }, {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        },
        {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        },
        {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        },
        {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        }, {
            firstName: "Skyler",
            lastName: "Talbot",
            email: "skytalbot@gmail.com",
            birthPlace: "Idaho",
            phone: 2087096057,
            food: "pizza",
            about: "stuff"
        }
    ];
    $scope.colors = ['red', 'blue', 'green', 'brown', 'purple']

    $scope.addPerson = function (person) {
        $scope.people.push(person);
        $scope.person = {};
    };

}]);
