var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, BountyService) {

    $scope.BountyService = BountyService;

    $scope.seePerson = function () {
        BountyService.getBounties().then(function () {
            $scope.bounties = BountyService.myBounties;
        });
    };

    $scope.addPerson = function (person) {
        BountyService.postBounties(person).then(function () {
            $scope.person = null;
        });
    };

    $scope.editPerson = function (person, index) {
        BountyService.editBounties(person, index).then(function (myBounties) {
            $scope.bounties = BountyService.myBounties;
            person.edit = false;
        })
    };

    $scope.deletePerson = function (person, index) {
        BountyService.deleteBounties(person, index).then(function (myBounties) {
            $scope.bounties = BountyService.myBounties;
        });
    };

});
