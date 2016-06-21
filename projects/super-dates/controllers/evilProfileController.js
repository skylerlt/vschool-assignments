var app = angular.module("mainApp");

app.controller("EvilProfileController", function ($scope, EvilProfileService) {

    $scope.user = EvilProfileService.currentUser;

});
