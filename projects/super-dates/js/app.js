var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/create", {
            templateUrl: "pages/createProfile.html",
            controller: "MainController"
        })
        .when("/eviCreate", {
            templateUrl: "pages/createEvilProfile.html",
            controller: "EvilController"
        })
});

app.controller("MainController", function ($scope, DatingService) {

    $scope.DatingService = DatingService;

    $scope.get = function () {
        $scope.toggle = false;
        DatingService.getUsers().then(function () {
            $scope.users = DatingService.userProfiles;
        })
    };

    $scope.filterByUsername = (params) {
        DatingService.get(params)
    }

    $scope.create = function (user) {
        DatingService.postUsers(user).then(function () {
            $scope.users = null;
            $scope.toggle = false;
        })
    };

    $scope.update = function (user, index) {
        DatingService.editUsers(user, index)
            .then(function (userProfiles) {
                $scope.users = DatingService.userProfiles;
                user.update = false;
            })
    };

    $scope.delete = function (user, index) {
        DatingService.deleteUsers(user, index)
            .then(function (userProfiles) {
                $scope.users = DatingService.userProfiles;
            })
    };

    $scope.toggle = false;

});

app.controller("EvilController", function ($scope, EvilDatingService) {

    $scope.EvilDatingService = EvilDatingService;

    $scope.evilGet = function () {
        $scope.toggle = false;
        EvilDatingService.getEvilUsers().then(function () {
            $scope.evilUsers = DatingService.EvilUserProfiles;
        })
    };

    $scope.evilCreate = function (evilUser) {
        EvilDatingService.postEvilUsers(evilUser).then(function () {
            $scope.evilUsers = null;
            $scope.toggle = false;
        })
    };

    $scope.evilUpdate = function (evilUser, index) {
        EvilDatingService.editEvilUsers(evilUser, index)
            .then(function (userProfiles) {
                $scope.users = EvilDatingService.evilUserProfiles;
                evilUser.update = false;
            })
    };

    $scope.evilDelete = function (evilUser, index) {
        EvilDatingService.deleteEvilUsers(evilUser, index)
            .then(function (evilUserProfiles) {
                $scope.evilUsers = EvilDatingService.evilUserProfiles;
            })
    };

    $scope.toggle = false;

});

app.filter('capitalize', function () {
    return function (input) {
        return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
