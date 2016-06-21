var app = angular.module("mainApp");

app.service("EvilDatingService", function ($http, EvilProfileService) {

    var baseUrl = "http://localhost:3000/evil-user/"
    this.evilUserProfiles = [];
    var self = this;

    this.getEvilUsers = function (params) {
        if (params) {
            var config = {
                params: params
            };
            return $http.get(baseUrl, config)
                .then(function (response) {
                    self.evilUserProfiles = response.data;
                });
        } else {
            return $http.get(baseUrl)
                .then(function (response) {
                    self.evilUserProfiles = response.data;
                })
        }
    };


    this.postEvilUsers = function (evilUser) {
        return $http.post(baseUrl, evilUser)
            .then(function (response) {
                self.evilUserProfiles.push(response.data);
                EvilProfileService.currentUser = response.data;
            })
    };

    this.editEvilUsers = function (user) {
        return $http.put(baseUrl + user._id, user)
            .then(function () {
                self.evilUserProfiles = user;
                return self.evilUserProfiles;
            })
    };

    //    this.deleteEvilUsers = function (evilUser, index) {
    //        return $http.delete(baseUrl + evilUser._id)
    //            .then(function () {
    //                self.evilUserProfiles.splice(index, 1);
    //                return self.evilUserProfiles;
    //            })
    //    };

});
