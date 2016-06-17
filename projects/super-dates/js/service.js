var app = angular.module("mainApp");

app.service("DatingService", function ($http) {

    var baseUrl = "http://localhost:3000/users/"
    this.userProfiles = [];
    var self = this;

    this.get = function (user) {
        return $http.get(baseUrl)
            .then(function (response) {
                self.userProfiles = response.data;
            })
    }

    this.postUsers = function (user) {
        return $http.post(baseUrl, user)
            .then(function (response) {
                self.userProfiles.push(response.data);
            })
    };

    this.editUsers = function (user, index) {
        return $http.put(baseUrl + user._id, user)
            .then(function () {
                self.userProfiles[index] = user;
                return self.userProfiles;
            })
    };

    this.deleteUsers = function (user, index) {
        return $http.delete(baseUrl + user._id)
            .then(function () {
                self.userProfiles.splice(index, 1);
                return self.userProfiles;
            })
    };

});

app.service("EvilDatingService", function ($http) {

    var baseUrl = "http://localhost:3000/evilUsers/"
    this.evilUserProfiles = [];
    var self = this;

    this.getEvilUsers = function (username) {
        if (username) {
            return $http.get(response).then(
                function (response) {
                    self.evilUserProfiles = response.data;
                })
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
            })
    };

    this.editEvilUsers = function (evilUser, index) {
        return $http.put(baseUrl + evilUser._id, evilUser)
            .then(function () {
                self.evilUserProfiles[index] = evilUser;
                return self.evilUserProfiles;
            })
    };

    this.deleteEvilUsers = function (evilUser, index) {
        return $http.delete(baseUrl + evilUser._id)
            .then(function () {
                self.evilUserProfiles.splice(index, 1);
                return self.evilUserProfiles;
            })
    };

});
