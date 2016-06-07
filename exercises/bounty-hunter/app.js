var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, $http) {

    var baseUrl = "http://localhost:8000/bounty/";
    var bountyList = [];

    $scope.addPerson = function (person) {
        $http.post(baseUrl, person).then(function (response) {
            $scope.bountyList.push(response.data)
            $scope.person = {};
        });
    };

    $scope.seePerson = function () {
        $http.get(baseUrl).then(function (response) {
            $scope.bountyList = response.data;
        })
    };

    $scope.editPerson = function (person, index) {
        $http.put(baseUrl + person.id, person).then(function (response) {
            $scope.bountyList[index] = response.data;
            person.editing = false;
        })
    };

    $scope.delete = function (person) {
        var confirmed = confirm("Are you sure?  Once it's gone, it's gone!");
        if (confirmed) {
            $http.delete(baseUrl + person.id).then(function (response) {
                $scope.bountyList.splice(response, 1);
            })
        }
    };

});

