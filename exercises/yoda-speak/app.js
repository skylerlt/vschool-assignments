var app = angular.module("mainApp", []);

app.controller("MainController", function ($scope, $http) {

    $scope.setPhrase = function (phrase) {
        var config = {
            headers: {
                "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
            }
        };

        $http.get("https://yoda.p.mashape.com/yoda?sentence=" + phrase, config)
            .then(function (response) {
                $scope.yodaPhrase = response.data
            })
    }
});
