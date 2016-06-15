var app = angular.module("mainApp");

app.service("DatingService", function ($http) {

    var baseUrl = "http://localhost:3000/users/"
    this.userProfiles = [];
    var self = this;

    this.getUsers = function () {
        return $http.get(baseUrl)
            .then(function (response) {
                self.userProfiles = response.data;
            })
    };

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
