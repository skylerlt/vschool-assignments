var app = angular.module("mainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/create", {
            templateUrl: "/pages/createProfile.html",
            controller: "MainController"
        })
        .when("/:userName/profile", {
            templateUrl: "/pages/userProfile.html",
            controller: "ProfileController"
        })
        .when("/:userName/evilProfile", {
            templateUrl: "/pages/evilUserProfile.html",
            controller: "EvilProfileController"
        })
        .when("/evilCreate", {
            templateUrl: "/pages/createEvilProfile.html",
            controller: "EvilController"
        })
        .when("/search", {
            templateUrl: "/pages/userSearch.html",
            controller: "MainController"
        })
        .when("/evilSearch", {
            templateUrl: "/pages/eviluserSearch.html",
            controller: "EvilController"
        })
});

app.controller("MainController", function ($scope, ProfileService, $location, DatingService) {

    $scope.DatingService = DatingService;
    this.ProfileService = ProfileService.currentUser;

    $scope.get = function (params) {
        $scope.toggle = false;
        DatingService.getUsers().then(function () {})
    };

    $scope.create = function (goodUser) {
        DatingService.postUsers(goodUser).then(function () {
            $scope.toggle = false;
            $location.path("/" + goodUser.userName + "/profile");
        })

    };

    $scope.update = function (user) {
        DatingService.editUsers(user)
            .then(function (goodUserProfiles) {
                $scope.users = DatingService.goodUserProfiles;
                user.edit = false;
            })
    };

    $scope.delete = function (user) {
        DatingService.deleteUsers(user)
            .then(function (goodUserProfiles) {
                $scope.users = DatingService.goodUserProfiles;
            })
    };

    $scope.filterByUserName = function (params) {
        if (filter.userName === DatingService.goodUserProfiles.userName) {
            DatingService.getUsers(params);
            $location.url($location.path());
        } else {
            alert("That name doesn't match a user in the database. ");
        }
    }

    $scope.toggle = false;

    $scope.wink = function () {
        alert("Wink sent");
    }

    $scope.message = function () {
        prompt("Enter a message: ");
    }

    $scope.flirt = function () {
        var flirting = Math.floor((Math.random() * 5) + 1);
        if (flirting === 1) {
            alert("You are hotter than the bottom of my laptop!");
        } else if (flirting === 2) {
            alert("You're body is 75% water and I'm thirsty!")
        } else if (flirting === 3) {
            alert("Aside from being sexy, what do you do for a living?")
        } else if (flirting === 4) {
            alert("On a sacle of 1 to 10, you're a 9.  I'm the 1 you need!")
        } else if (flirting === 5) {
            alert("You must be tired cuz you've been running through my mind all day!")
        }
    };

});
