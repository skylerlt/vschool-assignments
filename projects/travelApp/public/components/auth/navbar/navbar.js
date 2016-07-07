var app = angular.module("mainApp");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "components/auth/navbar/navbar.html",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}]);
