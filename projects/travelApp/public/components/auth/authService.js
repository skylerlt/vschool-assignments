var app = angular.module("mainApp.Auth", ["ngStorage"]);

app.service("UserService", ['$http', '$location', 'TokenService', function ($http, $location, TokenService) {
    var self = this;
    this.currentUser = {};

    this.signup = function (user) {
        return $http.post("http://localhost:8000/auth/signup", user);
    };

    this.login = function (user) {
        return $http.post("http://localhost:8000/auth/login", user).then(function (response) {
            console.log('Response from service ' + response);
            TokenService.setToken(response.data.token);
            self.currentUser = response.data.user;
            return response;
        }, function (response) {
            console.error("There was a bad response");
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

app.service("TokenService", function ($localStorage) {

    this.getToken = function () {
        return $localStorage.token;
    };

    this.setToken = function (token) {
        $localStorage.token = token;
    };

    this.removeToken = function () {
        delete $localStorage.token;
    };
});

app.factory("AuthInterceptor", function ($location, $q, TokenService) {
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
                $location.path("/login");
            }
            return $q.reject(response);
        }
    }
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
});
