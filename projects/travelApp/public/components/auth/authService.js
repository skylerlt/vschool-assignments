var app = angular.module("mainApp.Auth", ["ngStorage"]);

app.service("UserService", ['$http', '$location', 'TokenService', function ($http, $location, TokenService) {
    var self = this;
    this.currentUser = {};

    this.signup = function (user) {
        return $http.post("http://localhost:8000/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("http://localhost:8000/auth/login", user).then(function (response) {
            TokenService.setToken(response.data.token);
            self.currentUser = response.data.user;
            return response;
        });
    };

    this.logout = function () {
        TokenService.removeToken();
        $location.path("/");
    };

    this.isAuthenticated = function () {
        return TokenService.getToken();
    };

}]);

app.service("TokenService", ["$localStorage", function ($localStorage) {

    this.getToken = function () {
        return $localStorage.token;
    };

    this.setToken = function (token) {
        $localStorage.token = token;
    };

    this.removeToken = function () {
        delete $localStorage.token;
    };
}]);

app.factory("AuthInterceptor", ["$q", "$location", "$window", "TokenService", function ($q, $location, $window, TokenService) {
    return {
        request: function (config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            return config;
        },
        responseError: function (response) {
            if (response.status === 401) {
                TokenService.removeToken();
                //                $window.location.href = "index.html";
            }
            return $q.reject(response);
        }
    }
}]);

app.config(["$httpProvider", function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);
