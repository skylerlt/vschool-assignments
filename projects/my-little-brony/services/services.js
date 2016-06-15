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

    $scope.delete = function (pony, index) {
        var confirmed = confirm("Are you sure?  Once it's gone, it's gone!");
        if (confirmed) {
            $http.delete(baseUrl + pony.id).then(function () {
                $scope.ponyList.splice(index, 1);
            })
        }
    }
});
