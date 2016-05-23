var app = angular.module('mainApp', []);

app.controller("MainController", ["$scope", function ($scope) {

    $scope.player = {
        kills: [
            {
                handle: "jk400",
                rank: 14932,
                clan: ["hpburner200", "sputnik", "sololobo21"]
            },
            {
                handle: "hpburner200",
                rank: 14932,
                clan: ["jk400", "sputnik", "sololobo21"]
            },
            {
                handle: "sputnik",
                rank: 14932,
                clan: ["hpburner200", "jk400", "sololobo21"]
            },
            {
                handle: "sololobo21",
                rank: 14932,
                clan: ["hpburner200", "sputnik", "jk400"]
            }
        ]
    }
}]);