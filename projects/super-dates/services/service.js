var app = angular.module("mainApp");

app.service("DatingService", function ($http, ProfileService) {

    var baseUrl = "http://localhost:3000/good-user/"
    this.goodUserProfiles = [];
    var self = this;

    this.getUsers = function (params) {
        if (params) {
            var config = {
                params: params
            };
            return $http.get(baseUrl, config)
                .then(function (response) {
                    self.goodUserProfiles = response.data;
                });
        } else {
            return $http.get(baseUrl).then(function (response) {
                self.goodUserProfiles = response.data;
            })
        }

    };

    this.postUsers = function (goodUser) {
        return $http.post(baseUrl, goodUser)
            .then(function (response) {
                self.goodUserProfiles.push(response.data);
                ProfileService.currentUser = response.data;
            })
    };

    this.editUsers = function (user) {
        return $http.put(baseUrl + user._id, user)
            .then(function () {

                self.goodUserProfiles = user;
                return self.goodUserProfiles;
            })
    };

    //    this.deleteUsers = function (goodUser, index) {
    //        return $http.delete(baseUrl + goodUser._id)
    //            .then(function () {
    //                self.goodUserProfiles.splice(index, 1);
    //                return self.goodUserProfiles;
    //            })
    //    };

});
