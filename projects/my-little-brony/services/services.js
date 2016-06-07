var app = angular.module("mainApp");

app.service("PonyService", function ($http) {

    var baseUrl = "http://mean.codingcamp.us/skylertalbot/pony/"

    this.ponyList = [];
    var self = this;

    this.getPonies = function () {
        return $http.get(baseUrl)
            .then(function (response) {
                self.ponyList = response.data;
            })
    }

    this.postPonies = function (pony) {
        return $http.post(baseUrl, pony)
            .then(function (response) {
                self.ponyList.push(response.data)
            })
    };

    this.deletePonies = function (pony) {
        return $http.delete(baseUrl + pony._id)
        self.ponyList.splice(pony, 1)
        return this.ponyList;
    };
});
