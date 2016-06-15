var app = angular.module("mainApp");

app.service("BountyService", function ($http) {

    var baseUrl = "http://localhost:8000/bounty/"
    this.myBounties = [];
    var self = this;

    this.getBounties = function () {
        return $http.get(baseUrl)
            .then(function (response) {
                self.myBounties = response.data;
            })
    };

    this.postBounties = function (person) {
        return $http.post(baseUrl, person)
            .then(function (response) {
                self.myBounties.push(response.data);
            });
    };

    this.editBounties = function (person, index) {
        return $http.put(baseUrl + person._id, person).then(function () {
            self.myBounties[index] = person;
            return self.myBounties;
        })
    };

    this.deleteBounties = function (person, index) {
        return $http.delete(baseUrl + person._id).then(function () {
            self.myBounties.splice(index, 1);
            return self.myBounties;
        })
    };

});
