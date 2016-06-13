var app = angular.module("MainApp", ["ngRoute"]);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/vote", {
            templateUrl: "pages/vote.html",
            controller: "MainController"
        })
        .when("/comment", {
            templateUrl: "pages/comment.html",
            controller: "MainController"
        })

});

app.controller("MainController", function ($scope, CommentService) {

    $scope.CommentService = CommentService;

    var allPosts = [];
    var newPosts = [];

    $scope.getPosts = function () {
        CommentService.getPosts().then(function (userPosts) {
            $scope.allPosts = userPosts;
        })
    };

    $scope.postPosts = function (post) {
        CommentService.postPosts(post).then(function (userPosts) {
            $scope.allPosts.push(userPosts);
            $scope.post = {};
        })
    };

    $scope.addRemarks = function (remark) {
        CommentService.postPosts(remark).then(function (newPosts) {
            $scope.allPosts.push(newPosts);
            $scope.post = {};
        })
    };

    $scope.voteTotal = 0;

    $scope.upVote = function () {
        $scope.voteTotal += 1;
    }
    $scope.downVote = function () {
        $scope.voteTotal -= 1;
    }

});
