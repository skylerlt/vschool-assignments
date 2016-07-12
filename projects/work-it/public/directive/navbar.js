var app = angular.module("mainApp");

app.directive("navbar", ["UserService", function (UserService) {
    return {
        templateUrl: "directive/navbar.html",
        link: function (scope) {
            scope.userService = UserService;
        }
    }
}]);
