var app = angular.module("mainApp");

app.controller("ProfileController", function ($scope, ProfileService) {

    $scope.user = ProfileService.currentUser;

});
