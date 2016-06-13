var app = angular.module("MainApp");

app.service("CommentService", function ($http) {

    var userPosts = [];
    var baseUrl = "http://localhost:8000/posts"

    this.getPosts = function () {
        return $http.get(baseUrl)
            .then(function (response) {
                userPosts = response.data;
                return userPosts;
            })
    };

    this.postPosts = function (post) {
        return $http.post(baseUrl, post)
            .then(function (response) {
                userPosts.push(response.data);
            })
    };

});
