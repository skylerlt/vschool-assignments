var app = angular.module("mainApp");

app.controller("EvilController", function ($scope, $location, EvilProfileService, EvilDatingService) {

    $scope.EvilDatingService = EvilDatingService;
    this.EvilProfileService = EvilProfileService.currentUser;

    $scope.evilGet = function (params) {
        $scope.toggle = false;
        EvilDatingService.getEvilUsers(params).then(function () {})
    };

    $scope.evilCreate = function (evilUser) {
        EvilDatingService.postEvilUsers(evilUser).then(function () {
            $scope.toggle = false;
            $location.path("/" + evilUser.userName + "/evilProfile")
        })
    };

    $scope.evilUpdate = function (user) {
        EvilDatingService.editEvilUsers(user)
            .then(function (evilUserProfiles) {
                $scope.users = EvilDatingService.evilUserProfiles;
                user.edit = false;
            })
    };

    $scope.evilDelete = function (evilUser, index) {
        EvilDatingService.deleteEvilUsers(evilUser, index)
            .then(function (evilUserProfiles) {
                $scope.evilUsers = EvilDatingService.evilUserProfiles;
            })
    };

    $scope.toggle = false;

    $scope.filterByEvilUserName = function (params) {
        EvilDatingService.getEvilUsers(params);
        $location.url($location.path());
    }

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
